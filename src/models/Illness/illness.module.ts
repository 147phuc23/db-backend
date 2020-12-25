import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IllnessController } from './illness.controller'
import { IllnessRepository } from './illness.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IllnessRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [IllnessController]
})
export class IllnessModule {
}