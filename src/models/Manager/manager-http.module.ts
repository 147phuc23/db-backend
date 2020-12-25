import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ManagerController } from './manager.controller'
import { ManagerRepository } from './manager.repository'
import { ManagerService } from './manager.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ManagerRepository,
        ]),
    ],
    providers: [ ManagerService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[ManagerController],
    
})
export class ManagerModule {
}