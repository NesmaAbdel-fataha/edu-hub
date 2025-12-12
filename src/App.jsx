import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="product">
        <Main />
      </div>

      <div id="pricing">
        <Card />
      </div>

      <div id="contact">
        <Footer />
      </div>

    
    </>
  );
}

export default App;


