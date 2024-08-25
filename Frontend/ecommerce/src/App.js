// import logo from "./logo.svg";
import "./App.css";
import Footer from "./customer/components/Footer/Footer.jsx";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Product from "./customer/components/Product/Product.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
