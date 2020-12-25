import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestResultController } from './testResult.controller'
import { TestResultRepository } from './testResult.repository'
import { TestResultService } from './testResult.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TestResultRepository,
        ]),
    ],
    providers: [ TestResultService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[TestResultController],
    
})
export class TestResultModule {
}