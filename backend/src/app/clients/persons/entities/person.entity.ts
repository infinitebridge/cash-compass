import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Abstract from '../../../common/abstract';
import { Company } from '../../companies/entities/company.entity';
enum Role {
  CEO = 'CEO',
}
@Entity()
export class Person extends Abstract {
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({
    nullable: true,
  })
  email: string;
  @Column({
    nullable: true,
  })
  phone: string;
  @Column({
    nullable: true,
  })
  whatsapp_phone: string;
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.CEO,
    nullable: true,
  })
  role: Role;
  @ManyToOne(() => Company, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
