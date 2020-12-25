import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IllnessController } from './illness.controller'
import { IllnessRepository } from './illness.repository'
import { IllnessService } from './illness.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            IllnessRepository,
        ]),
    ],
    providers: [ IllnessService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[IllnessController],
    
})
export class IllnessModule {
}