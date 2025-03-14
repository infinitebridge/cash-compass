import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessesController } from './businesses.controller';
import { BusinessesService } from './businesses.service';
import { Business } from './entities/business.entity';

@Module({
  controllers: [BusinessesController],
  providers: [BusinessesService],
  imports: [TypeOrmModule.forFeature([Business])],
})
export class BusinessesModule {}
