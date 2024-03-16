import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [AnimalService, PrismaService, UserService],
  controllers: [AnimalController],
  exports: [AnimalService],
})
export class AnimalModule {}