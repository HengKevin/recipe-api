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
}

export class UpdateIngredientInput {
    id: number;
    name: string;
    quantity: string;
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
}

export abstract class IMutation {
    abstract createIngredient(createIngredientInput: CreateIngredientInput): Ingredient | Promise<Ingredient>;

    abstract updateIngredient(updateIngredientInput: UpdateIngredientInput): Ingredient | Promise<Ingredient>;

    abstract removeIngredient(id: number): Nullable<Ingredient> | Promise<Nullable<Ingredient>>;
}

type Nullable<T> = T | null;
