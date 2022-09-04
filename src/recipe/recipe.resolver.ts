import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRecipeInput } from 'src/graphql';
import { RecipeService } from './recipe.service';

@Resolver('Recipe')
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Mutation('createRecipe')
  create(@Args('createRecipeInput') createRecipeInput: CreateRecipeInput) {
    return this.recipeService.create(createRecipeInput);
  }

  @Query('recipes')
  findAll() {
    return this.recipeService.findAll();
  }

  @Query('recipe')
  findOne(@Args('id') id: number) {
    return this.recipeService.findOne(id);
  }

  @Mutation('removeRecipe')
  remove(@Args('id') id: number) {
    return this.recipeService.remove(id);
  }
}
