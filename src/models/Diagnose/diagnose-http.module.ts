import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DiagnoseController } from './diagnose.controller'
import { DiagnoseRepository } from './diagnose.repository'
import { DiagnoseService } from './diagnose.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DiagnoseRepository,
        ]),
    ],
    providers: [ DiagnoseService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[DiagnoseController],
    
})
export class DiagnoseModule {
}