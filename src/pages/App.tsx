import React, { ReactElement } from "react";
import "../styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerFirst from "../pages/first_step/CustomerFirst";
import CustomerInput from "../pages/first_step/CustomerInput";
import CustomerConfime from "../pages/first_step/CustomerConfime";
import CustomerComplete from "../pages/first_step/CustomerComplete";
import MypageTop from "../pages/my_page/MypageTop";
import Input from "../pages/my_page/Input";
import CancelBye from "../pages/my_page/Cancel_bye";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Route exact path="/customer_first" component={CustomerFirst} />
      <Route exact path="/customer_input" component={CustomerInput} />
      <Route exact path="/customer_confime" component={CustomerConfime} />
      <Route exact path="/customer_complete" component={CustomerComplete} />
      <Route exact path="/mypage_top" component={MypageTop} />
      <Route exact path="/input" component={Input} />
      <Route exact path="/cancel_bye" component={CancelBye} />
    </BrowserRouter>
  );
};

export default App;
