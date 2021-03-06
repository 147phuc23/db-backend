import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientController } from './patient.controller'
import { PatientRepository } from './patient.repository'
import { PatientService } from './patient.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PatientRepository,
        ]),
    ],
    providers: [PatientService],
    exports: [
        TypeOrmModule, PatientService
    ],
    controllers: [PatientController],

})
export class PatientModule {
}