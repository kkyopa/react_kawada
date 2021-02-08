import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function MypageTop(props: RouteComponentProps) {
  const NextInput = () => {
    props.history.push({ pathname: "/input" });
  };

  const NextCancelBye = () => {
    props.history.push({ pathname: "/cancel_bye" });
  };

  return (
    <>
      <h2>お客様情報</h2>
      <button onClick={NextInput}>登録画面</button>
      <button onClick={NextCancelBye}>退会</button>
    </>
  );
}
