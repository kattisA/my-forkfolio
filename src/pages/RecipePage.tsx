import Header from "../components/Header";
import TopBar from "../components/Topbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import type { Recipe } from "../types";
import { useLocation, useParams } from "react-router-dom";

type LocationState = { recipe?: Recipe };

export const RecipePage = () => {
    const { state } = useLocation() as { state: LocationState };
    const { id } = useParams();
    const recipe = state?.recipe;
    return(
        <div className="wrapper">
            <Header/>
            <TopBar/>
            <Hero />
            <div className="articleContainer">
                <main>
                    <div className="topContainer">
                        <img src={recipe?.image} alt={recipe?.title} />
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

