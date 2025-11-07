import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {RecipePage} from "./pages/RecipePage";
import {RecipeListPage} from "./pages/RecipeListPage";

function App() {

    return (
        <Router basename="/my-forkfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes/:id" element={<RecipePage />} />
                <Route path="/recipe-list/:category" element={<RecipeListPage />} />
            </Routes>
        </Router>
    );
}

export default App
