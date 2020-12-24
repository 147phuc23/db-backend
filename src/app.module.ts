import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/users/user.entity';
import { UserModule } from './models/users/user-http.module';
import { MyLogger } from './models/base/logger.custom';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    entities: [User],
  }), UserModule],
  controllers: [AppController],
  providers: [AppService, MyLogger],
})
export class AppModule { }


