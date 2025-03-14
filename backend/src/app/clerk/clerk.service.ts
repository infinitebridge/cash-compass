import { ClerkClient, createClerkClient, User } from '@clerk/backend';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ClerkService {
  private clerkClientInstance: ClerkClient;
  constructor() {
    this.clerkClientInstance = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });
  }
  async updateUser(id: string, data: Partial<User> & { createdAt?: Date }) {
    try {
      const response = await this.clerkClientInstance.users.updateUser(
        id,
        data as any
      );
      return response;
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createOrganization(
    name: string,
    createdBy: string,
    publicMetadata: OrganizationPublicMetadata
  ) {
    const response =
      await this.clerkClientInstance.organizations.createOrganization({
        name,
        createdBy,
        publicMetadata: publicMetadata,
      });
    return response;
  }
}
