export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
  likes: number;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  sourceName: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  nutrition: Nutrition;
}

export interface Ingredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
}

export interface Nutrition {
  nutrients: Nutrient[];
}

export interface Nutrient {
  title: string;
  amount: number;
  unit: string;
}

export interface RecipeSearchResponse {
  offset: number;
  number: number;
  results: Recipe[];
  totalResults: number;
} 