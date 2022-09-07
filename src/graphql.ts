
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateIngredientInput {
    name: string;
    quantity: string;
    quantityType: string;
    recipeId?: Nullable<number>;
}

export class UpdateIngredientInput {
    id: number;
    name: string;
    quantity: string;
}

export class CreateRecipeInput {
    name: string;
    instructions: string;
    imageUrl: string;
    ingredients: IngredientsInput[];
}

export class IngredientsInput {
    name: string;
    quantity: string;
    quantityType: string;
    recipeId?: Nullable<number>;
}

export class Ingredient {
    id: number;
    name: string;
    quantity: string;
    quantityType: string;
}

export abstract class IQuery {
    abstract ingredients(): Nullable<Ingredient>[] | Promise<Nullable<Ingredient>[]>;

    abstract ingredient(id: number): Nullable<Ingredient> | Promise<Nullable<Ingredient>>;

    abstract recipes(): Nullable<Recipe>[] | Promise<Nullable<Recipe>[]>;

    abstract recipe(id: number): Nullable<Recipe> | Promise<Nullable<Recipe>>;
}

export abstract class IMutation {
    abstract createIngredient(createIngredientInput: CreateIngredientInput): Ingredient | Promise<Ingredient>;

    abstract createIngredients(createIngrediensInput: CreateIngredientInput[]): Nullable<Ingredient>[] | Promise<Nullable<Ingredient>[]>;

    abstract updateIngredient(updateIngredientInput: UpdateIngredientInput): Ingredient | Promise<Ingredient>;

    abstract removeIngredient(id: number): Nullable<Ingredient> | Promise<Nullable<Ingredient>>;

    abstract createRecipe(createRecipeInput: CreateRecipeInput): Recipe | Promise<Recipe>;

    abstract removeRecipe(id: number): Nullable<Recipe> | Promise<Nullable<Recipe>>;
}

export class Recipe {
    id: number;
    name: string;
    instructions: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    ingredients: Ingredient[];
}

type Nullable<T> = T | null;
