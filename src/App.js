import React from 'react';
import './sass/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import DGeneralPage from './pages/DGeneralPage';
import DEspecificoPage from './pages/DEspecificoPage';

import MainLayout from './layouts/MainLayout';
import Header from "./components/Header";

const App = () => {
  const m1 = "Bienvenido! En esta página podrás realizar un diagnóstico de enfermedades degenerativas basado en un pequeño cuestionario. Recuerda que este es un simple ejercicio de diagnóstico rápido, así que, si se te diagnostica alguna de estas enfermedades recuerda ir con tu médico para realizar una revisión más exhaustiva.";
  const m2 = "En esta sección podrás contestar un cuestionario y tus respuestas serán comparadas con los parámetros de las propias enfermedades de las que tenemos información.";
  const m3 = "En esta sección podrás elegir las enfermedades con las que te gustaría comparar las respuestas de tu cuestionario.";

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/dGeneral">
            <Header message={m2}></Header>
            <section className="section">
              <main className="container">
                <DGeneralPage/>
              </main>  
            </section>
          </Route>
          <Route path="/dEspecifico">
            <Header message={m3}></Header>
            <section className="section">
              <main className="container">
                <DEspecificoPage/>
              </main>  
            </section>
          </Route>
          <Route path="/">
            <Header message={m1}></Header>
            <section className="section">
              <main className="container">
                <HomePage/>
              </main>  
            </section>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
