import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function CustomerComplete(props: RouteComponentProps) {
  const Next = () => {
    props.history.push({ pathname: "/mypage_top" });
  };
  return (
    <div>
      <h2>完了しました</h2>
      <button onClick={Next}>マイページ画面</button>
    </div>
  );
}
