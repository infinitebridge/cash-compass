import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import Abstract from '../../common/abstract';
@Entity()
export class Tax extends Abstract {
  @Column({ unique: true })
  name: string;
  @Column('decimal')
  amount: number;

  @Column({ type: 'bool' })
  default: boolean;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
