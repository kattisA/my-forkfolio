import Header from "../components/Header";
import TopBar from "../components/Topbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import {Ingredients} from "../components/Ingredients";
import {useParams} from "react-router-dom";
import {useRecipes} from "../hooks/useRecipes";


export const RecipePage = () => {
    const { id } = useParams<{ id: string }>();
    const { recipes, loading, error } = useRecipes();

    if (loading) return <p>Laddar…</p>;
    if (error) return <p>{error}</p>;

    // Find recipe
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        return (
            <div className="wrapper">
                <Header />
                <TopBar />
                <Hero />
                <main className="articleContainer">
                    <p>Receptet kunde inte hittas.</p>
                </main>
                <Footer />
            </div>
        );
    }
    return(
        <div className="wrapper">
            <Header/>
            <TopBar/>
            <Hero />
            <div className="articleContainer">
                <main>
                    <div className="topContainer">
                        <img src={recipe?.image} alt={recipe?.title} />
                        {recipe?.ingredients && (
                            <Ingredients items={recipe.ingredients}/>
                        )}
                    </div>

                    <div className="textContent">
                        <h1 id="recipe-title">{recipe?.title}</h1>
                        <p className="textIntro">{recipe?.description}</p>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

