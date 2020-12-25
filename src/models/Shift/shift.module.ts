import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShiftController } from './shift.controller'
import { ShiftRepository } from './shift.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShiftRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [ShiftController]
})
export class ShiftModule {
}