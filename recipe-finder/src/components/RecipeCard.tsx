import { Card, Badge } from 'react-bootstrap';
import { Recipe } from '../types/types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  // Extract calories or default to 0
  const calories = recipe.nutrition?.nutrients?.find(n => n.title === 'Calories')?.amount || 0;
  
  // Handle empty arrays safely
  const diets = recipe.diets || [];
  const dishTypes = recipe.dishTypes || [];
  const cuisines = recipe.cuisines || [];

  return (
    <Card className="h-100">
      <Card.Img 
        variant="top" 
        src={recipe.image} 
        alt={recipe.title} 
        className="card-img-top"
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/350x250?text=Recipe+Image';
        }}
      />
      <Card.Body>
        <h5 className="recipe-title">{recipe.title}</h5>
        <div className="mb-2">
          {diets.slice(0, 2).map((diet, index) => (
            <Badge bg="success" className="me-1" key={index}>{diet}</Badge>
          ))}
          {dishTypes.slice(0, 2).map((type, index) => (
            <Badge bg="info" className="me-1" key={index}>{type}</Badge>
          ))}
        </div>
        <Card.Text>
          <small>
            {recipe.usedIngredientCount || 0} ingredients matched • {Math.round(calories)} calories
          </small>
        </Card.Text>
        <div className="recipe-meta">
          <small>{cuisines.length > 0 ? cuisines.join(', ') : 'Various Cuisine'}</small>
          <small>{recipe.readyInMinutes || 'N/A'} mins</small>
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <a 
          href={recipe.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-sm btn-outline-primary w-100"
        >
          View Recipe
        </a>
      </Card.Footer>
    </Card>
  );
};

export default RecipeCard; 