import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NurseController } from './nurse.controller'
import { NurseRepository } from './nurse.repository'
import { NurseService } from './nurse.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            NurseRepository,
        ]),
    ],
    providers: [ NurseService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[NurseController],
    
})
export class NurseModule {
}