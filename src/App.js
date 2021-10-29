import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";


import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Nosotros } from "./pages/Nosotros/nosotros";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import Layout from "./components/Loyout";


export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
};


