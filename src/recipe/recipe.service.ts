import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}
  async create(createRecipeInput: CreateRecipeInput) {
    return await this.prisma.recipe.create({
      data: {
        ...createRecipeInput,
        ingredients: {
          createMany: {
            data: [...createRecipeInput.ingredients],
          },
        },
      },
      include: { ingredients: true },
    });
  }

  async findAll() {
    return await this.prisma.recipe.findMany({
      include: { ingredients: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.recipe.findUnique({
      where: { id },
      include: { ingredients: true },
    });
  }

  async remove(id: number) {
    return await this.prisma.recipe.delete({
      where: { id },
      include: { ingredients: true },
    });
  }
}
