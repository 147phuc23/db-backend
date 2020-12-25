import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeController } from './employee.controller'
import { EmployeeRepository } from './employee.repository'
import { EmployeeService } from './employee.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeeRepository,
        ]),
    ],
    providers: [ EmployeeService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[EmployeeController],
    
})
export class EmployeeModule {
}