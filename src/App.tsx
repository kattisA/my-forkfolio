import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {RecipePage} from "./pages/RecipePage";

function App() {

    return (
        <Router basename="/my-forkfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes/:id" element={<RecipePage />} />
            </Routes>
        </Router>
    );
}

export default App
