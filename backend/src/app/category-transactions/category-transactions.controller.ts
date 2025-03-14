import { Controller } from '@nestjs/common';
import { TransactionCategoriesService } from './category-transactions.service';

@Controller('transaction-categories')
export class TransactionCategoriesController {
  constructor(
    private readonly transactionCategoriesService: TransactionCategoriesService
  ) {}
}
