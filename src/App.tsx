import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBar from "./components/Topbar";
import Hero from "./components/Hero";
import {RecipeLoader} from "./components/RecipeLoader";

function App() {

  return (
      <div className="wrapper">
          <Header/>
          <TopBar/>
          <Hero />
          <RecipeLoader />
          <Footer/>
      </div>
  )
}

export default App
