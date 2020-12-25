import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InsuranceController } from './insurance.controller'
import { InsuranceRepository } from './insurance.repository'
import { InsuranceService } from './insurance.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            InsuranceRepository,
        ]),
    ],
    providers: [ InsuranceService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[InsuranceController],
    
})
export class InsuranceModule {
}