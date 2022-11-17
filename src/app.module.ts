import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { options } from './database/config/ormconfig';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(options), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
