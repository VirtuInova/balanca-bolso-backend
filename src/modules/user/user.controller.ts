import { Body, Controller, Post, Get, Param, UnauthorizedException  } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { ActiveUserId } from 'src/shared/database/decorators/activerUserId';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('cadastrarUser')
  cadastrarUser(
    @Body()
    dto: UserDTO,
  ) {
    const {animal_category, phone, clerk_id} = dto

    if(!animal_category || !phone || !clerk_id){
    throw new UnauthorizedException("Existe um campo vazio")   
   }
     return this.userService.cadastrarUser(dto);
  }

  @Get('getUser')
  async getUserById(
    @ActiveUserId() userId: string
  ) {
    return await this.userService.getUserBydId(userId);
  }

  @Get('test')
  async testApi(
    
  ) {
    return { statusCode: 200, message: 'Success' }; 
  }

  @Post('updateUser/:id')
  updateUser(
    @Body()
    dto: UserDTO,
    @Param('id')
    id: string,
  ) {
    return this.userService.updateUser(dto, id);
  }
}
