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
  import { Shift } from './shift.entity'
  import { ShiftService } from './shift.service'
  import { CreateShiftDto } from './dto/create-shift.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateShiftDto } from './dto/update-shift.dto'
  import { DeleteResult, getConnection } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('shifts')
  export class ShiftController {
    constructor(private readonly shiftService: ShiftService) {}

    @Get()
    index(): Promise<Shift[]> {
      return this.shiftService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Shift> {
      const shift = await this.shiftService.findById(id)
      if (!shift) {
        throw new NotFoundException()
      }
  
      return shift
    }
  
    @Post()
    async create(@Body() shiftData: CreateShiftDto): Promise<Shift> {
      const createdShift = await this.shiftService.store(shiftData)
  
      return plainToClass(Shift, createdShift)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() shiftData: UpdateShiftDto): Promise<Shift> {
      return this.shiftService.update(id, shiftData)
    }

    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.shiftService.delete(id)
    }
  }