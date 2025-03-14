import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';
import { CategoryTransaction } from '../../category-transactions/entities/category-transaction';
import { Person } from '../../clients/persons/entities/person.entity';
import Abstract from '../../common/abstract';

enum Type {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

@Entity()
export class Transaction extends Abstract {
  @Column({ type: 'timestamptz' })
  date: Date;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @ManyToOne(() => CategoryTransaction)
  @JoinColumn({ name: 'category_id' })
  category: CategoryTransaction;

  @Column('decimal')
  amount: number;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.INCOME,
  })
  type: Type;

  @Column({ default: '' })
  note: string;

  @ManyToOne(() => Person, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'payee_id' })
  payee: Person;
}
