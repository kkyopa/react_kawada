import React, { ReactElement, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";
import BirthDate from "../../components/atoms/BirthDate";
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
      <button onClick={Next}>次へ</button>
    </>
  );
}
