import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DiagnoseController } from './diagnose.controller'
import { DiagnoseRepository } from './diagnose.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DiagnoseRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [DiagnoseController]
})
export class DiagnoseModule {
}