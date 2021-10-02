import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Services from "./pages/services";
import SignUp from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
