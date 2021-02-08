import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function CustomerConfime(props: RouteComponentProps) {
  const Next = () => {
    props.history.push({ pathname: "/customer_complete" });
  };
  return (
    <div>
      <h2>こちらでよろしいでしょうか?</h2>
      {/* <button>戻る</button> */}
      <button onClick={Next}>次へ</button>
    </div>
  );
}
