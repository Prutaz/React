import axios from 'axios';
import { RecipeSearchResponse, Recipe } from '../types/types';

// Spoonacular API key - you can get a free one at https://spoonacular.com/food-api
const API_KEY = '8a1e127a0b8e48859d6eb30fc674d0a0';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (ingredients: string): Promise<RecipeSearchResponse> => {
  try {
    // First, get recipes by ingredients
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: ingredients,
        number: 9, // Number of recipes to return
        addRecipeInformation: true,
        fillIngredients: true,
        addRecipeNutrition: true,
        sort: 'popularity',
      }
    });
    
    return {
      offset: 0,
      number: response.data.results.length,
      results: response.data.results,
      totalResults: response.data.totalResults
    };
  } catch (error: any) {
    console.error('Error fetching recipes:', error.message);
    if (error.response) {
      console.error('API response error:', error.response.data);
    }
    throw error;
  }
};

export const getRecipeDetails = async (recipeId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${recipeId}/information`, {
      params: {
        apiKey: API_KEY,
        includeNutrition: true,
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

// Mock data for testing without an API key
function mockResponseData(): RecipeSearchResponse {
  const mockRecipes: Recipe[] = [
    {
      id: 1,
      title: 'French Onion Soup',
      image: 'https://spoonacular.com/recipeImages/492560-556x370.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 3,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 209,
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: 'https://www.bonappetit.com/recipe/french-onion-soup',
      sourceName: 'Bon Appetit',
      cuisines: ['French'],
      dishTypes: ['soup', 'lunch'],
      diets: ['vegetarian'],
      nutrition: {
        nutrients: [
          {
            title: 'Calories',
            amount: 285,
            unit: 'kcal'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Caramelized Onion Dip',
      image: 'https://spoonacular.com/recipeImages/482574-556x370.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 178,
      readyInMinutes: 35,
      servings: 6,
      sourceUrl: 'https://www.epicurious.com/recipes/food/views/caramelized-onion-dip',
      sourceName: 'Epicurious',
      cuisines: ['American'],
      dishTypes: ['dip', 'appetizer'],
      diets: ['vegetarian'],
      nutrition: {
        nutrients: [
          {
            title: 'Calories',
            amount: 180,
            unit: 'kcal'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Onion and Mushroom Pasta',
      image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 4,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 233,
      readyInMinutes: 30,
      servings: 4,
      sourceUrl: 'https://cookieandkate.com/mushroom-pasta-recipe/',
      sourceName: 'Cookie and Kate',
      cuisines: ['Italian'],
      dishTypes: ['main course', 'dinner'],
      diets: ['vegetarian'],
      nutrition: {
        nutrients: [
          {
            title: 'Calories',
            amount: 320,
            unit: 'kcal'
          }
        ]
      }
    }
  ];

  return {
    offset: 0,
    number: mockRecipes.length,
    results: mockRecipes,
    totalResults: mockRecipes.length
  };
} 