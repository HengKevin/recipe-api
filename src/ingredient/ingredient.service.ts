import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngredientInput } from 'src/types/graphql';

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    quantity,
    quantityType,
    recipeId,
  }: CreateIngredientInput) {
    return await this.prisma.ingredient.create({
      data: {
        name,
        quantity,
        quantityType,
        recipeId,
      },
    });
  }

  async createMany(createIngredientInputs: CreateIngredientInput[]) {
    return await this.prisma.ingredient.createMany({
      data: createIngredientInputs,
    });
  }

  async findAll() {
    return await this.prisma.ingredient.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.ingredient.findUnique({
      where: { id },
      select: { name: true, quantity: true, quantityType: true },
    });
  }
}
