import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/footer/Footer";
import style from "./App.module.scss";
import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  return (
    <>
      <div className={`d-flex flex-column ${style.appContainer}`}>
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
