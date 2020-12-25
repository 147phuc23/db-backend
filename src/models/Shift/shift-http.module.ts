import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShiftController } from './shift.controller'
import { ShiftRepository } from './shift.repository'
import { ShiftService } from './shift.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ShiftRepository,
        ]),
    ],
    providers: [ ShiftService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[ShiftController],
    
})
export class ShiftModule {
}