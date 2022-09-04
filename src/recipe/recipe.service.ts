import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}
  create(createRecipeInput: CreateRecipeInput) {
    return this.prisma.recipe.create({
      data: {
        ...createRecipeInput,
      },
      include: { ingredients: true },
    });
  }

  findAll() {
    return this.prisma.recipe.findMany({
      include: { ingredients: true },
    });
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: { ingredients: true },
    });
  }

  remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
      include: { ingredients: true },
    });
  }
}
