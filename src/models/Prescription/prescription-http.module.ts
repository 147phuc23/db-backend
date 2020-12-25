import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PrescriptionController } from './prescription.controller'
import { PrescriptionRepository } from './prescription.repository'
import { PrescriptionService } from './prescription.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PrescriptionRepository,
        ]),
    ],
    providers: [ PrescriptionService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[PrescriptionController],
    
})
export class PrescriptionModule {
}