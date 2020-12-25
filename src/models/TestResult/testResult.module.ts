import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestResultController } from './testResult.controller'
import { TestResultRepository } from './testResult.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TestResultRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [TestResultController]
})
export class TestResultModule {
}