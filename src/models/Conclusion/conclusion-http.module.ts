import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConclusionController } from './conclusion.controller'
import { ConclusionRepository } from './conclusion.repository'
import { ConclusionService } from './conclusion.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ConclusionRepository,
        ]),
    ],
    providers: [ ConclusionService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[ConclusionController],
    
})
export class ConclusionModule {
}