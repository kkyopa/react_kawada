import React, { ReactElement, createContext, useState } from "react";
import "../styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerFirst from "../pages/first_step/CustomerFirst";
import CustomerInput from "../pages/first_step/CustomerInput";
import CustomerConfime from "../pages/first_step/CustomerConfime";
import CustomerComplete from "../pages/first_step/CustomerComplete";
import MypageTop from "../pages/my_page/MypageTop";
import Input from "../pages/my_page/Input";
import CancelBye from "../pages/my_page/Cancel_bye";
import * as User from "../services/User";

export const UserContext = createContext(
  {} as {
    TestUser: User.DummyUser;
    setTestUser: React.Dispatch<React.SetStateAction<User.DummyUser>>;

    TestContractor: User.DummyContractor;
    setTestContractor: React.Dispatch<
      React.SetStateAction<User.DummyContractor>
    >;

    TestHuman: User.HumanRegister[];
    setTestHuman: React.Dispatch<React.SetStateAction<User.HumanRegister[]>>;
  }
);

const App = (): ReactElement => {
  const [TestUser, setTestUser] = useState<User.DummyUser>(
    User.DUMMY_TEST_USER
  );
  const [TestContractor, setTestContractor] = useState<User.DummyContractor>(
    User.DUMMY_CONTRACTOR
  );

  const [TestHuman, setTestHuman] = useState<User.HumanRegister[]>([
    User.getDummyHuman(),
  ]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          TestUser: TestUser,
          setTestUser: setTestUser,
          TestContractor: TestContractor,
          setTestContractor: setTestContractor,
          TestHuman: TestHuman,
          setTestHuman: setTestHuman,
        }}
      >
        <Route exact path="/customer_first" component={CustomerFirst} />
        <Route exact path="/customer_input" component={CustomerInput} />
        <Route exact path="/customer_confime" component={CustomerConfime} />
        <Route exact path="/customer_complete" component={CustomerComplete} />
        <Route exact path="/mypage_top" component={MypageTop} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/cancel_bye" component={CancelBye} />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
