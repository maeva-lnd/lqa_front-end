import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import RestaurantMenu from "./Pages/RestaurantMenu/RestaurantMenu";

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/lacarte" element={<RestaurantMenu />}/>
        </Routes>
        <Footer />
    </div>
  );

}

export default App;
