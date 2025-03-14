import {
  Body,
  Controller,
  Headers,
  HttpException,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserBusinessRequestDto } from './dto/create-user-business.dto';
import { UserBusinessesService } from './user-businesses.service';

@Controller('user-businesses')
export class UserBusinessesController {
  constructor(private readonly userBusinessesService: UserBusinessesService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) userBusinessRequest: UserBusinessRequestDto,
    @Headers('x-hasura-secret') x_hasura_secret: string
  ) {
    if (x_hasura_secret != process.env['HASURA_SECRET_HEADER']) {
      return new HttpException('', HttpStatus.FORBIDDEN);
    }
    const userExternal =
      userBusinessRequest.session_variables['x-hasura-user-external-id'];
    return this.userBusinessesService.create(
      userBusinessRequest.input,
      userExternal
    );
  }
}
