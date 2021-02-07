import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function CustomerFirst(props: RouteComponentProps) {
  const Next = () => {
    props.history.push({ pathname: "/customer_input" });
  };

  return (
    <>
      お客様情報
      {/* <button>戻る</button> */}
      <button onClick={Next}>次へ</button>
    </>
  );
}
