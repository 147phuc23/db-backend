import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DepartmentController } from './department.controller'
import { DepartmentRepository } from './department.repository'
import { DepartmentService } from './department.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DepartmentRepository,
        ]),
    ],
    providers: [ DepartmentService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[DepartmentController],
    
})
export class DepartmentModule {
}