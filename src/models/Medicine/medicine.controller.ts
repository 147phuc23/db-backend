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
  import { Medicine } from './medicine.entity'
  import { MedicineService } from './medicine.service'
  import { CreateMedicineDto } from './dto/create-medicine.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateMedicineDto } from './dto/update-medicine.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('medicines')
  export class MedicineController {
    constructor(private readonly medicineService: MedicineService) {}

    @Get()
    index(): Promise<Medicine[]> {
      return this.medicineService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Medicine> {
      const medicine = await this.medicineService.findById(id)
      if (!medicine) {
        throw new NotFoundException()
      }
  
      return medicine
    }
  
    @Post()
    async create(@Body() medicineData: CreateMedicineDto): Promise<Medicine> {
      const createdMedicine = await this.medicineService.store(medicineData)
  
      return plainToClass(Medicine, createdMedicine)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() medicineData: UpdateMedicineDto): Promise<Medicine> {
      return this.medicineService.update(id, medicineData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.medicineService.delete(id)
    }
  }