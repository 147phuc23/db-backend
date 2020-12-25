import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MedicineController } from './medicine.controller'
import { MedicineRepository } from './medicine.repository'
import { MedicineService } from './medicine.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MedicineRepository,
        ]),
    ],
    providers: [ MedicineService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[MedicineController],
    
})
export class MedicineModule {
}