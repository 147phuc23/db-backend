import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { LoggerService } from '@nestjs/common';
import { DoctorModule } from '../Doctor/doctor-http.module'
import { PatientModule } from '../Patient/patient-http.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserRepository,
        ]),
    ],
    providers: [
        UserService,
        DoctorModule,
        PatientModule
    ],
    exports: [
        TypeOrmModule,
    ],
    controllers: [UserController],

})
export class UserModule {
}