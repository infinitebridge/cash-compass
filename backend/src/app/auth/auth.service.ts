import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClerkService } from '../clerk/clerk.service';
import { User as UserType } from '../webhooks/dto/user/created.dto';
import { User } from './entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly clerkService: ClerkService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  async createUser(user: UserType) {
    const userInstance = {
      ...user,
      id: undefined,
      clerk_id: user.id,
      created_at: user.created_at ? new Date(user.created_at) : undefined,
      updated_at: user.updated_at ? new Date(user.updated_at) : undefined,
      last_sign_in_at: user.last_sign_in_at
        ? new Date(user.last_sign_in_at)
        : undefined,
    };
    const savedUser = await this.usersRepository.save(
      userInstance as unknown as User
    );

    await this.clerkService.updateUser(user.id, {
      externalId: `${savedUser.id}`,
      publicMetadata: {
        role: 'owner',
      },
    });
  }
}
