# Recipe Finder

A modern React application that helps you discover recipes based on ingredients you have available.

## Features

- Search for recipes by entering ingredients
- Modern, responsive UI built with React Bootstrap
- View recipe details including ingredients, nutritional information, and cooking time
- Filter recipes by diet, cuisine type, and more

## Technologies Used

- React with TypeScript
- Vite for fast development and building
- Bootstrap for responsive UI components
- Axios for API requests
- Spoonacular Recipe API for recipe data

## Setup and Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd recipe-finder
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a free account at [Spoonacular API](https://spoonacular.com/food-api) and obtain your API key.

4. Open `src/services/recipeService.ts` and replace the placeholder with your Spoonacular API key:
   ```typescript
   const API_KEY = 'YOUR_SPOONACULAR_API_KEY';
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173/`

## Demo Mode

For demonstration purposes, the application includes mock data that will be used if no valid API key is provided. This allows you to explore the app's functionality without signing up for an API key. To use real recipe data, simply add your Spoonacular API key as described in the setup instructions.

## Building for Production

To create a production build:

```
npm run build
```

The build artifacts will be located in the `dist/` directory.

## API Usage

This application uses the Spoonacular API which provides:
- 150 free API calls per day
- Detailed recipe information
- Nutritional data
- Ingredient matching
- Recipe search by ingredients

## Future Enhancements

- Save favorite recipes
- Create meal plans
- Nutritional information visualization
- Recipe filtering options
- User accounts and preferences

## License

MIT
