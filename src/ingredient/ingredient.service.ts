import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateIngredientInput,
  UpdateIngredientInput,
} from 'src/types/graphql';

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}
  create(createIngredientInput: CreateIngredientInput) {
    return this.prisma.ingredient.create({
      data: {
        ...createIngredientInput,
      },
    });
  }

  findAll() {
    return this.prisma.ingredient.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingredient.findUnique({
      where: { id },
      select: { name: true, quantity: true, quantityType: true },
    });
  }

  update(id: number, updateIngredientInput: UpdateIngredientInput) {
    return this.prisma.ingredient.update({
      where: { id },
      data: {
        ...updateIngredientInput,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ingredient.delete({
      where: { id },
    });
  }
}
