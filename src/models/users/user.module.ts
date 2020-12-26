import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DoctorModule } from '../Doctor/doctor-http.module'
import { PatientModule } from '../Patient/patient-http.module'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
    ]),
    DoctorModule, PatientModule
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [UserController]
})
export class UserModule {
}