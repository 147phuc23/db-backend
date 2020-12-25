import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExaminationController } from './examination.controller'
import { ExaminationRepository } from './examination.repository'
import { ExaminationService } from './examination.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ExaminationRepository,
        ]),
    ],
    providers: [ ExaminationService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[ExaminationController],
    
})
export class ExaminationModule {
}