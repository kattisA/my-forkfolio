import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBar from "./components/Topbar";
import Hero from "./components/Hero";
import {RecipeList} from "./components/RecipeList";

function App() {

  return (
      <div className="wrapper">
          <Header/>
          <TopBar/>
          <Hero />
          <RecipeList/>
          <Footer/>
      </div>
  )
}

export default App
