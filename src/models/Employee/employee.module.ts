import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeController } from './employee.controller'
import { EmployeeRepository } from './employee.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeeRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [EmployeeController]
})
export class EmployeeModule {
}