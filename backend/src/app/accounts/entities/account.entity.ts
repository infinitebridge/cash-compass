import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import Abstract from '../../common/abstract';
@Entity()
export class Account extends Abstract {
  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
