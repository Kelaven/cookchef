import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={`d-flex flex-column ${style.appContainer}`}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
