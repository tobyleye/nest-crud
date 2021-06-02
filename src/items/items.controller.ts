import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number | string) {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number | string) {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  editItem(
    @Param('id') id: string | number,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemsService.updateOne(id, updateItemDto);
  }
}
