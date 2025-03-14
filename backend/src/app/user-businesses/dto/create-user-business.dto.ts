import { Type } from 'class-transformer';
import { IsString, MaxLength, ValidateNested } from 'class-validator';
export class OrganizationDTO {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  @MaxLength(50)
  business_description: string;
}

export class ActionDto {
  @IsString()
  name: string;
}

export class SessionVariablesDto {
  @IsString()
  'x-hasura-user-id': string;
  @IsString()
  'x-hasura-user-external-id': string;
}
export class UserBusinessRequestDto {
  @ValidateNested({ each: true })
  @Type(() => ActionDto)
  action: ActionDto;
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  input: OrganizationDTO;
  @IsString()
  request_query: string;
  @ValidateNested({ each: true })
  @Type(() => SessionVariablesDto)
  session_variables: SessionVariablesDto;
}
