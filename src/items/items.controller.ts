import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from "./dto/create-item.dto"
import { ItemsService } from './items.service';
import { Item} from "./items.service"

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get()
    findAll(): Array<Item> {
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Item | null  {
        console.log('finding item ', id);
        
        return this.itemsService.findOne(id)
    }

    @Post()
    create( @Body() createItemDto: CreateItemDto ) {
        // this.itemsService.create(createItemDto)
        return 'OK'
    }

    @Delete() 
    deleteItem() {
        return 'OK'
    }

    @Put() 
    editItem() {
        return 'edit!'
    }
}
