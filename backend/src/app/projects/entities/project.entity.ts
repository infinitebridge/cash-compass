import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import { Person } from '../../clients/persons/entities/person.entity';
import Abstract from '../../common/abstract';
import { Product } from '../../products/entities/product';
import { Service } from '../../services/entities/service.entity';
export enum Type {
  PER_HOUR = 'PER_HOUR',
  FLAT_RATE = 'FLAT_RATE',
}
@Entity()
export class Project extends Abstract {
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToOne(() => Person, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: Person;

  @ManyToMany(() => Service, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'project_services',
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'service_id',
      referencedColumnName: 'id',
    },
  })
  services: Service[];

  @ManyToMany(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'project_products',
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: Product[];

  @Column({ type: 'enum', enum: Type })
  type: Type;

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
