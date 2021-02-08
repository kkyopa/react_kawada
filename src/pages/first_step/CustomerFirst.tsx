import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function CustomerFirst(props: RouteComponentProps) {
  const Next = () => {
    props.history.push({ pathname: "/customer_input" });
  };

  return (
    <>
      <h2>お客様情報</h2>
      <button onClick={Next}>次へ</button>
    </>
  );
}
