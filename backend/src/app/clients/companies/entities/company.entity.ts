import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Business } from '../../../businesses/entities/business.entity';
import Abstract from '../../../common/abstract';

@Entity()
export class Company extends Abstract {
  @Column()
  name: string;
  @Column({
    nullable: true,
  })
  address: string;
  @Column({
    nullable: true,
  })
  country: string;
  @Column({
    nullable: true,
  })
  business_phone: string;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
