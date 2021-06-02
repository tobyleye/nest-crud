import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';
import { CreateItemDto } from './dto/create-item.dto';
@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  findAll() {
    return this.itemsRepository.find();
  }

  updateOne(id, changes) {
    return this.itemsRepository.update(id, changes);
  }

  findOne(opts) {
    return this.itemsRepository.findOne(opts);
  }

  create(createItemDto: CreateItemDto) {
    const item = new Item();
    item.name = createItemDto.name;
    item.qty = createItemDto.qty;

    return this.itemsRepository.save(item);
  }

  delete(id: string | number) {
    return this.itemsRepository.delete(id);
  }
}
