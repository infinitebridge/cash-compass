import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import Abstract from '../../common/abstract';

import { UserBusiness } from '../../user-businesses/entities/user-business.entity';
import { EmailAddress } from '../../webhooks/dto/user/created.dto';

@Entity()
export class User extends Abstract {
  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  birthday: string;

  @Column('jsonb', { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EmailAddress)
  email_addresses: EmailAddress[];

  @Column('jsonb', { nullable: true })
  @IsArray()
  external_accounts: any[];

  @Column()
  @IsString()
  clerk_id: string;

  @Column()
  @IsString()
  first_name: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  gender: string;

  @Column()
  @IsString()
  last_name: string;

  @Column({ type: 'timestamp', nullable: true })
  last_sign_in_at: Date;

  @Column()
  @IsString()
  object: string;

  @Column()
  @IsBoolean()
  password_enabled: boolean;

  @Column('jsonb', { nullable: true })
  @IsArray()
  phone_numbers: any[];

  @Column()
  @IsString()
  primary_email_address_id: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  primary_phone_number_id: string | null;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  primary_web3_wallet_id: string | null;

  @Column('jsonb', { default: {} })
  @IsObject()
  private_metadata: Record<string, any>;

  @Column()
  @IsUrl()
  image_url: string;

  @Column()
  @IsUrl()
  profile_image_url: string;

  @Column('jsonb', { default: {} })
  @IsObject()
  public_metadata: Record<string, any>;

  @Column()
  @IsBoolean()
  two_factor_enabled: boolean;

  @Column('jsonb', { default: {} })
  @IsObject()
  unsafe_metadata: Record<string, any>;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  username: string | null;

  @Column('jsonb', { nullable: true })
  @IsArray()
  web3_wallets: any[];
  @OneToMany(() => UserBusiness, (userBusiness) => userBusiness.user)
  userBusinesses: UserBusiness[];
}
