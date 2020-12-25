import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MedicineController } from './medicine.controller'
import { MedicineRepository } from './medicine.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MedicineRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [MedicineController]
})
export class MedicineModule {
}