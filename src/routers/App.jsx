import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

/*
¿Qué estamos haciendo?
BrowserRoute sirve para implementar router en el navegador

Switch regresa la primera ruta que coincida. En pocas palabras, si estamos en www.platzi.com/contacto , 
regresará el componente que coincida a este (es decir, el componente que contenga la lógica de contacto).
En esta caso, estamos poniendo varios routes dentro de switch, ¿para qué? para que solamente traiga esa misma ruta, 
y no tenga que buscar más. Como si fuese un condicional switch de javascript efectivamente. 
Y por ello tenemos un route sin path, que será el valor por defecto.

Layout solamente renderizará el route que coincida efectivamente con la URL especificada.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path="*" component={NotFound} />
        </Switch>{" "}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
