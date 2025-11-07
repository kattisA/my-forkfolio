import {useParams} from 'react-router-dom';
import {useRecipes} from "../hooks/useRecipes";
import Header from "../components/Header";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";
import {RecipeList} from "../components/RecipeList";


export const RecipeListPage = () => {
    const { recipes } = useRecipes();
    const { category } = useParams<{ category: string }>();

    const filteredRecipes = category
        ? recipes.filter(r => r.category === category)
        : recipes;

    return (
        <div className="wrapper">
            <Header/>
            <TopBar/>
            <RecipeList recipes={filteredRecipes}/>
            <Footer/>
        </div>
    );
}