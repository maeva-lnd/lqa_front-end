import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import RestaurantMenu from "./Pages/RestaurantMenu/RestaurantMenu";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Authentification/Login/Login";
import ForgotPassword from "./Pages/Authentification/ForgotPassword/ForgotPassword";
import CreateAccount from "./Pages/Authentification/CreateAccount/CreateAccount";
import Logout from "./Pages/Authentification/Logout/Logout";


function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/lacarte" element={<RestaurantMenu />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/connexion" element={<Login />}/>
            <Route path="/motdepasseperdu" element={<ForgotPassword />}/>
            <Route path="/inscription" element={<CreateAccount />}/>
            <Route path="/deconnexion" element={<Logout />}/>
        </Routes>
        <Footer />
    </div>
  );

}

export default App;
