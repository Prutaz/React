import { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import './App.css'
import { Recipe } from './types/types'
import RecipeList from './components/RecipeList'
import { searchRecipes } from './services/recipeService'

function App() {
  const [ingredients, setIngredients] = useState<string>('')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!ingredients.trim()) {
      setError('Please enter at least one ingredient')
      return
    }
    
    setError(null)
    setLoading(true)
    
    try {
      const response = await searchRecipes(ingredients)
      setRecipes(response.results)
    } catch (err) {
      console.error('Error searching recipes:', err)
      setError('Failed to search recipes. Please try again later.')
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Recipe Finder</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container className="py-4">
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1>Find Recipes With Your Ingredients</h1>
            <p className="lead">
              Enter ingredients you have on hand, and we'll show you recipes you can make!
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-5">
          <Col md={6}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="btn btn-primary" 
                type="button" 
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Find Recipes'}
              </button>
            </div>
            {error && <div className="text-danger small text-center">{error}</div>}
          </Col>
        </Row>
        
        <RecipeList recipes={recipes} loading={loading} />
      </Container>

      <footer>
        <Container>
          <p className="mb-0">Recipe Finder &copy; {new Date().getFullYear()}</p>
        </Container>
      </footer>
    </>
  )
}

export default App
