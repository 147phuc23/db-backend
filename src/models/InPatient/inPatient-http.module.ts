import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InPatientController } from './inPatient.controller'
import { InPatientRepository } from './inPatient.repository'
import { InPatientService } from './inPatient.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            InPatientRepository,
        ]),
    ],
    providers: [ InPatientService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[InPatientController],
    
})
export class InPatientModule {
}