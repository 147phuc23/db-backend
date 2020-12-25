import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InPatientController } from './inPatient.controller'
import { InPatientRepository } from './inPatient.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InPatientRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [InPatientController]
})
export class InPatientModule {
}