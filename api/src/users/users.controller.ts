import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiHeader,
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { userProfile } from 'src/swagger/example.response';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer Token',
    required: true,
  })
  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse(userProfile)
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findClient(@Request() req) {
    return this.usersService.findClient(req.user.email);
  }
}
