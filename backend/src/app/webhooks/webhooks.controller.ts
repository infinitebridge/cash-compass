import {
  Body,
  Controller,
  Headers,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Webhook } from 'svix';
import { AuthService } from '../auth/auth.service';
import { UserCreatedPayloadDto } from './dto/user/created.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly authService: AuthService) {}
  @Post('clerk/user-created')
  async UserCreated(
    @Body() userCreatedPayload: any,
    @Headers('svix-id') svix_id: string,
    @Headers('svix-timestamp') svix_timestamp: string,
    @Headers('svix-signature') svix_signature: string
  ) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      return new HttpException(
        'You need a WEBHOOK_SECRET in your .env',
        HttpStatus.UNAUTHORIZED
      );
    }

    // If there are no Svix headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new HttpException(
        'Error occured -- no svix headers',
        HttpStatus.BAD_REQUEST
      );
    }

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: UserCreatedPayloadDto;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If the verification fails, error out and  return error code
    try {
      evt = wh.verify(JSON.stringify(userCreatedPayload), {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      }) as UserCreatedPayloadDto;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console
    const userData = evt.data;
    try {
      await this.authService.createUser(userData);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
