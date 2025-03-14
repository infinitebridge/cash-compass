import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../auth/entities/users.entity';
import { Business } from '../../businesses/entities/business.entity';
import Abstract from '../../common/abstract';

export enum UserBusinessRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}
@Entity()
export class UserBusiness extends Abstract {
  @ManyToOne(() => User, (user) => user.userBusinesses)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @Column({
    default: false,
  })
  is_default: boolean;
  @ManyToOne(() => Business, (business) => business.userBusinesses)
  @JoinColumn({ name: 'business_id' })
  business: Business;
  @Column({
    type: 'enum',
    enum: UserBusinessRole,
    default: UserBusinessRole.ADMIN,
  })
  role: UserBusinessRole;
}
