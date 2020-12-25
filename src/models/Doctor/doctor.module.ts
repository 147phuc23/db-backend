import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DoctorController } from './doctor.controller'
import { DoctorRepository } from './doctor.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoctorRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [DoctorController]
})
export class DoctorModule {
}