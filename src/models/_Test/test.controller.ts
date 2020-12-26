import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common'
  import { Test } from './test.entity'
  import { TestService } from './test.service'
  import { CreateTestDto } from './dto/create-test.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateTestDto } from './dto/update-test.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('tests')
  export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    index(): Promise<Test[]> {
      return this.testService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Test> {
      const test = await this.testService.findById(id)
      if (!test) {
        throw new NotFoundException()
      }
  
      return test
    }
  
    @Post()
    async create(@Body() testData: CreateTestDto): Promise<Test> {
      const createdTest = await this.testService.store(testData)
  
      return plainToClass(Test, createdTest)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() testData: UpdateTestDto): Promise<Test> {
      return this.testService.update(id, testData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.testService.delete(id)
    }
  }