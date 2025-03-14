import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Business } from '../../businesses/entities/business.entity';
import { CategoryTransaction } from '../../category-transactions/entities/category-transaction';
import Abstract from '../../common/abstract';
@Entity()
export class Service extends Abstract {
  @Column()
  name: string;
  @Column()
  description: string;

  @Column('decimal')
  rate: number;
  @Column({ default: false })
  billable: boolean;
  @Column({ default: false })
  auto_add: boolean;
  //! todo: add taxe relationship
  //! todo: add createdBy field
  @ManyToOne(() => CategoryTransaction, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'income_category_id' })
  income_category: CategoryTransaction;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
