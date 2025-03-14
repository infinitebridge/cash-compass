import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BusinessesModule } from './businesses/businesses.module';
import { TransactionCategoriesModule } from './category-transactions/category-transactions.module';
import { ClerkModule } from './clerk/clerk.module';
import { CompaniesModule } from './clients/companies/companies.module';
import { PersonsModule } from './clients/persons/persons.module';
import { ProductsModule } from './products/products.module';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';
import { TaxesModule } from './taxes/taxes.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UserBusinessesModule } from './user-businesses/user-businesses.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['POSTGRES_HOST'],
      port: ~~process.env['POSTGRES_PORT'],
      username: process.env['POSTGRES_USER'],
      password: process.env['POSTGRES_PASSWORD'],
      database: process.env['POSTGRES_DATABASE'],
      autoLoadEntities: true,
      synchronize: true,
      entities: [],
      ssl: true,
    }),
    TransactionCategoriesModule,
    AccountsModule,
    TransactionsModule,
    PersonsModule,
    CompaniesModule,
    ProductsModule,
    ServicesModule,
    ProjectsModule,
    BusinessesModule,
    WebhooksModule,
    AuthModule,
    ClerkModule,
    TaxesModule,
    UserBusinessesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
