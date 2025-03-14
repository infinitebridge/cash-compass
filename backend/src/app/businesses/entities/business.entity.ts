import { Column, Entity, OneToMany } from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';
import { CategoryTransaction } from '../../category-transactions/entities/category-transaction';
import { Company } from '../../clients/companies/entities/company.entity';
import Abstract from '../../common/abstract';
import { Product } from '../../products/entities/product';
import { Project } from '../../projects/entities/project.entity';
import { Service } from '../../services/entities/service.entity';
import { Tax } from '../../taxes/entities/tax.entity';
import { UserBusiness } from '../../user-businesses/entities/user-business.entity';

@Entity()
export class Business extends Abstract {
  @Column()
  name: string;
  @Column({
    nullable: true,
  })
  description: string;
  @OneToMany(() => UserBusiness, (userBusiness) => userBusiness.business)
  userBusinesses: UserBusiness[];
  @OneToMany(() => Account, (account) => account.business)
  accounts: Account[];
  @OneToMany(
    () => CategoryTransaction,
    (category_transaction) => category_transaction.business
  )
  category_transactions: CategoryTransaction[];
  @OneToMany(() => Company, (company) => company.business)
  companies: Company[];
  @OneToMany(() => Product, (product) => product.business)
  products: Product[];
  @OneToMany(() => Project, (project) => project.business)
  projects: Project[];
  @OneToMany(() => Service, (service) => service.business)
  services: Service[];
  @OneToMany(() => Tax, (tax) => tax.business)
  taxes: Tax[];
}
