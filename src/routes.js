import React from "react";
import { Switch, useLocation, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../src/styles/animation.css";

import Home from "../src/pages/Home";
import About from "./pages/About";
import Projetos from "../src/pages/Projetos";
import Contato from "../src/pages/Contato";


import { isAuthenticated } from "./services/auth";

 

export default function Routes() {
  const location = useLocation();
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  console.log(PrivateRoute)
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Projetos" exact component={Projetos} />
          <Route path="/Contato" exact component={Contato} />
          
        </Switch>
  
      </CSSTransition>
    </TransitionGroup>
  );
}