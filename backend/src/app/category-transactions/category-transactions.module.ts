import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionCategoriesController } from './category-transactions.controller';
import { TransactionCategoriesService } from './category-transactions.service';
import { CategoryTransaction } from './entities/category-transaction';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTransaction])],
  controllers: [TransactionCategoriesController],
  providers: [TransactionCategoriesService],
})
export class TransactionCategoriesModule {}
