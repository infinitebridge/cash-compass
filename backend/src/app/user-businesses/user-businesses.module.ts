import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from '../businesses/entities/business.entity';
import { UserBusiness } from './entities/user-business.entity';
import { UserBusinessesController } from './user-businesses.controller';
import { UserBusinessesService } from './user-businesses.service';

@Module({
  controllers: [UserBusinessesController],
  providers: [UserBusinessesService],
  imports: [TypeOrmModule.forFeature([UserBusiness, Business])],
})
export class UserBusinessesModule {}
