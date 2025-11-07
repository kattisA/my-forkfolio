import Header from "../components/Header";
import TopBar from "../components/Topbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import {useRecipes} from "../hooks/useRecipes";
import {RecipeList} from "../components/RecipeList";
import {useNavigate} from "react-router-dom";

export const Home = () => {
        const {  recipes,categories, loading, error } = useRecipes();
        const navigate = useNavigate();

        if (loading) return <p>Laddar…</p>;
        if (error) return <p>{error}</p>;



        const handleSelectCategory = (category: string) => {
            navigate(`/recipe-list/${encodeURIComponent(category)}`);
        };

        return (
            <div className="wrapper">
                    <Header/>
                    <TopBar/>
                    <Hero/>
                    <Tags categories={categories} onSelect={handleSelectCategory}/>
                    <RecipeList recipes={recipes} />
                    <Footer/>
            </div>
        );
}
