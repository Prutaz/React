import { Row, Col } from 'react-bootstrap';
import { Recipe } from '../types/types';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
  loading?: boolean;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, loading = false }) => {
  if (loading) {
    return (
      <Row className="justify-content-center">
        <Col className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Searching for delicious recipes...</p>
        </Col>
      </Row>
    );
  }

  if (recipes.length === 0) {
    return (
      <Row className="justify-content-center">
        <Col className="text-center">
          <p>No recipes found. Try different ingredients!</p>
        </Col>
      </Row>
    );
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {recipes.map((recipe, index) => (
        <Col key={index}>
          <RecipeCard recipe={recipe} />
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList; 