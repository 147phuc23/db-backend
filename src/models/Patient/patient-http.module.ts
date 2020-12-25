import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientController } from './patient.controller'
import { PatientRepository } from './patient.repository'
import { PatientService } from './patient.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PatientRepository,
        ]),
    ],
    providers: [ PatientService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[PatientController],
    
})
export class PatientModule {
}