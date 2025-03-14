import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

class Verification {
  @IsString()
  status: string;

  @IsString()
  strategy: string;
}

export class EmailAddress {
  @IsString()
  email_address: string;

  @IsString()
  id: string;

  @IsArray()
  linked_to: any[];

  @IsString()
  object: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Verification)
  verification: Verification;
}

export class User {
  @IsOptional()
  @IsString()
  birthday: string;

  @IsNumber()
  created_at: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EmailAddress)
  email_addresses: EmailAddress[];

  @IsArray()
  external_accounts: any[];

  @IsString()
  @ValidateIf((object, value) => value !== null)
  external_id!: string;

  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsString()
  id: string;

  @IsUrl()
  image_url: string;

  @IsString()
  last_name: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  last_sign_in_at!: number;

  @IsString()
  object: string;

  @IsBoolean()
  password_enabled: boolean;

  @IsArray()
  phone_numbers: any[];

  @IsString()
  primary_email_address_id: string;

  @IsOptional()
  @IsString()
  primary_phone_number_id: string | null;

  @IsOptional()
  @IsString()
  primary_web3_wallet_id: string | null;

  @IsObject()
  private_metadata: Record<string, any>;

  @IsUrl()
  profile_image_url: string;

  @IsObject()
  public_metadata: Record<string, any>;

  @IsBoolean()
  two_factor_enabled: boolean;

  @IsObject()
  unsafe_metadata: Record<string, any>;

  @IsNumber()
  updated_at: number;

  @IsOptional()
  @IsString()
  username: string | null;

  @IsArray()
  web3_wallets: any[];
}

export class UserCreatedPayloadDto {
  @IsObject()
  @ValidateNested()
  @Type(() => User)
  data: User;

  @IsString()
  object: string;

  @IsString()
  type: 'user.created';
}
