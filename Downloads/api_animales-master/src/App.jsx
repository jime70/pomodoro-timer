//import React from 'react';
import { Home } from "./pages/Home";
import { Navbar } from './components/Navbar';
//import { ListadoAdoptame } from './components/ListadoAdoptame';
//import { ErrorBoundary } from './components/ErrorBoundary';
import "./App.css";

export const App = () => {
  return (
    <div>
      {/* <ErrorBoundary> */}
      <Navbar />
      {/* <ListadoAdoptame /> */}
      <Home />
      {/* </ErrorBoundary> */}
    </div>
  );
};
