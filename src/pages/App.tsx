import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerFirst from "../pages/first_step/CustomerFirst";
import CustomerInput from "../pages/first_step/CustomerInput";

// import CustomerInput from "../pages/first_step/CustomerInput";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/customer_first" component={CustomerFirst} />
      <Route exact path="/customer_input" component={CustomerInput} />
    </BrowserRouter>
  );
};

export default App;
