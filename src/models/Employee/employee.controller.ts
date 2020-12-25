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
  import { Employee } from './employee.entity'
  import { EmployeeService } from './employee.service'
  import { CreateEmployeeDto } from './dto/create-employee.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateEmployeeDto } from './dto/update-employee.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('employees')
  export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    index(): Promise<Employee[]> {
      return this.employeeService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Employee> {
      const employee = await this.employeeService.findById(id)
      if (!employee) {
        throw new NotFoundException()
      }
  
      return employee
    }
  
    @Post()
    async create(@Body() employeeData: CreateEmployeeDto): Promise<Employee> {
      const createdEmployee = await this.employeeService.store(employeeData)
  
      return plainToClass(Employee, createdEmployee)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() employeeData: UpdateEmployeeDto): Promise<Employee> {
      return this.employeeService.update(id, employeeData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.employeeService.delete(id)
    }
  }