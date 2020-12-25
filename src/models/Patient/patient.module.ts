import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientController } from './patient.controller'
import { PatientRepository } from './patient.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PatientRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [PatientController]
})
export class PatientModule {
}