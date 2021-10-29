import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import { Footer } from "./components/Footer/footer";
import { Navbar } from "./components/Navbar/navbar";
import Form from "./components/Contact/form";

import { Home } from "./pages/Home/home";
import { Menu } from "./pages/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/form" component={Form} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
