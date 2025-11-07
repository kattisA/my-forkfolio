import Header from "../components/Header";
import TopBar from "../components/Topbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import type { Recipe } from "../types";
import {Ingredients} from "../components/Ingredients";
import {useParams} from "react-router-dom";


export const RecipePage = () => {
    const { recipe } = useParams<{ recipe: Recipe }>();
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

