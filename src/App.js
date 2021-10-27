import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};


