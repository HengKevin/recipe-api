import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateIngredientInput } from 'src/types/graphql';
import { IngredientService } from './ingredient.service';

@Resolver('Ingredient')
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) {}

  @Mutation('createIngredient')
  create(
    @Args('createIngredientInput') createIngredientInput: CreateIngredientInput,
  ) {
    return this.ingredientService.create(createIngredientInput);
  }

  @Query('ingredients')
  findAll() {
    return this.ingredientService.findAll();
  }

  @Query('ingredient')
  findOne(@Args('id') id: number) {
    return this.ingredientService.findOne(id);
  }
}
