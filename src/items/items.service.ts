import { Injectable } from '@nestjs/common';

export interface Item {
  id?: string | number;
  name: string;
  description?: string;
  qty: number;
}

@Injectable()
export class ItemsService {
  private items: Array<Item> = [
    {
      id: 1,
      name: 'item one',
      description: 'item one description',
      qty: 10,
    },
    {
      id: 2,
      name: 'item two',
      description: 'item two description',
      qty: 10,
    },
    {
      id: 3,
      name: 'item three',
      description: 'item three description',
      qty: 10,
    },
  ];

  findAll(): Array<Item> {
    return this.items;
  }

//   create(newItem) {
//     this.items.push(newItem);
//   }

  findOne(id: string | number): Item | null {
    return this.items.find((item) => item.id == id);
  }
}
