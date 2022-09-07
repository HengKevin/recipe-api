import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateIngredientInput,
  UpdateIngredientInput,
} from 'src/types/graphql';
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

  @Mutation('createIngredients')
  createMany(
    @Args('createIngredientInputs')
    createIngredientInputs: CreateIngredientInput[],
  ) {
    return this.ingredientService.createMany(createIngredientInputs);
  }

  @Query('ingredients')
  findAll() {
    return this.ingredientService.findAll();
  }

  @Query('ingredient')
  findOne(@Args('id') id: number) {
    return this.ingredientService.findOne(id);
  }

  @Mutation('updateIngredient')
  update(
    @Args('updateIngredientInput') updateIngredientInput: UpdateIngredientInput,
  ) {
    return this.ingredientService.update(
      updateIngredientInput.id,
      updateIngredientInput,
    );
  }

  @Mutation('removeIngredient')
  remove(@Args('id') id: number) {
    return this.ingredientService.remove(id);
  }
}
