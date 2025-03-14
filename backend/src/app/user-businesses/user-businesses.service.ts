import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from '../businesses/entities/business.entity';
import { OrganizationDTO } from './dto/create-user-business.dto';
import {
  UserBusiness,
  UserBusinessRole,
} from './entities/user-business.entity';

@Injectable()
export class UserBusinessesService {
  constructor(
    @InjectRepository(UserBusiness)
    private readonly userBusinessRepository: Repository<UserBusiness>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>
  ) {}
  async create(organizationData: OrganizationDTO, userExternal: string) {
    const newUserBusiness = new UserBusiness();
    const newBusiness = new Business();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    newUserBusiness.user = {
      id: ~~userExternal,
    };

    newUserBusiness.role = UserBusinessRole.ADMIN;
    newUserBusiness.is_default = true;
    newBusiness.name = organizationData.name;
    newBusiness.description = organizationData.business_description;

    const savedBusiness = await this.businessRepository.save(newBusiness);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    newUserBusiness.business = {
      id: savedBusiness.id,
    };
    const savedUserBusiness = await this.userBusinessRepository.save(
      newUserBusiness
    );
    return {
      id: savedUserBusiness.id,
    };
  }
}
