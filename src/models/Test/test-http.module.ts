import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestController } from './test.controller'
import { TestRepository } from './test.repository'
import { TestService } from './test.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TestRepository,
        ]),
    ],
    providers: [ TestService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[TestController],
    
})
export class TestModule {
}