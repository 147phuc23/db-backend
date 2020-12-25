import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DepartmentController } from './department.controller'
import { DepartmentRepository } from './department.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DepartmentRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [DepartmentController]
})
export class DepartmentModule {
}