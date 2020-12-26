import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DoctorController } from './doctor.controller'
import { DoctorRepository } from './doctor.repository'
import { DoctorService } from './doctor.service'
import {LoggerService} from '@nestjs/common';
import { Department } from '../Department/department.entity'
import { DepartmentService } from '../Department/department.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DoctorRepository,
        ]),
    ],
    providers: [ DoctorService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[DoctorController],
    
})
export class DoctorModule {
}