import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import Abstract from '../../common/abstract';

enum Type {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

@Entity()
export class CategoryTransaction extends Abstract {
  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.INCOME,
  })
  type: Type;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
