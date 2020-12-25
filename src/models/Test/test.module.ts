import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestController } from './test.controller'
import { TestRepository } from './test.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TestRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [TestController]
})
export class TestModule {
}