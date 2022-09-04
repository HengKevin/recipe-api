import { CreateIngredientInput } from './create-ingredient.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateIngredientInput extends PartialType(CreateIngredientInput) {
  id: number;
}
