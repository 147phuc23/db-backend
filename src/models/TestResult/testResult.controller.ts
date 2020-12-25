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
  import { TestResult } from './testResult.entity'
  import { TestResultService } from './testResult.service'
  import { CreateTestResultDto } from './dto/create-testResult.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateTestResultDto } from './dto/update-testResult.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('testResults')
  export class TestResultController {
    constructor(private readonly testResultService: TestResultService) {}

    @Get()
    index(): Promise<TestResult[]> {
      return this.testResultService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<TestResult> {
      const testResult = await this.testResultService.findById(id)
      if (!testResult) {
        throw new NotFoundException()
      }
  
      return testResult
    }
  
    @Post()
    async create(@Body() testResultData: CreateTestResultDto): Promise<TestResult> {
      const createdTestResult = await this.testResultService.store(testResultData)
  
      return plainToClass(TestResult, createdTestResult)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() testResultData: UpdateTestResultDto): Promise<TestResult> {
      return this.testResultService.update(id, testResultData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.testResultService.delete(id)
    }
  }