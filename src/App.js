import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Formulario from "./components/Contact/formulario";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/formulario" component={Formulario} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
