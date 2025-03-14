import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tax } from './entities/tax.entity';
import { TaxesController } from './taxes.controller';
import { TaxesService } from './taxes.service';

@Module({
  controllers: [TaxesController],
  providers: [TaxesService],
  imports: [TypeOrmModule.forFeature([Tax])],
})
export class TaxesModule {}
