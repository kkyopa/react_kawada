import React, { ReactElement, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";
import BirthDate from "../../components/atoms/BirthDate";
import Gender from "../../components/atoms/Gender";
import Mail from "../../components/atoms/Mail";
import { UserContext } from "../App";

export default function CustomerFirst(
  props: RouteComponentProps
): ReactElement {
  const Next = () => {
    props.history.push({ pathname: "/customer_input" });
  };
  const { TestUser: TestUser } = useContext(UserContext);

  return (
    <>
      <h2>お客様情報</h2>
      <BirthDate birthDate={TestUser.birthDate} />
      <Gender gender={TestUser.gender} />
      <Mail mailAddress={TestUser.email} />
      <button onClick={Next}>次へ</button>
    </>
  );
}
