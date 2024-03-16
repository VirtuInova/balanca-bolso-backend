import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

  async cadastrarUser(dto: UserDTO) {
    const user = await this.prismaService.user.create({
      data: {
        ...dto,
      },
    });
    return user;
  }

  async getUserBydId(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        clerk_id: id,
      },
    });

    return user;
  }



  async updateUser(dto: UserDTO, id: string) {
    const updateUser = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateUser;
  }

  async deleteUser(id: string) {
    const deleteUser = await this.prismaService.user.delete({
      where: {
        id,
      },
    });

    return deleteUser;
  }
}
