import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PrescriptionController } from './prescription.controller'
import { PrescriptionRepository } from './prescription.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PrescriptionRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [PrescriptionController]
})
export class PrescriptionModule {
}