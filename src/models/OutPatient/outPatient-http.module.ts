import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OutPatientController } from './outPatient.controller'
import { OutPatientRepository } from './outPatient.repository'
import { OutPatientService } from './outPatient.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OutPatientRepository,
        ]),
    ],
    providers: [ OutPatientService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[OutPatientController],
    
})
export class OutPatientModule {
}