import Header from "../components/Header";
import TopBar from "../components/Topbar";
import {RecipeLoader} from "../components/RecipeLoader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export const Home = () => (
    <div className="wrapper">
        <Header/>
        <TopBar/>
        <Hero />
        <RecipeLoader />
        <Footer/>
    </div>
);
