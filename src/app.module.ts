import { Module } from '@nestjs/common';
import { AnimalModule } from './modules/animal/animal.module';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [AnimalModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
