import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";

export default function CustomerInput(props: RouteComponentProps) {
  const Next = () => {
    props.history.push({ pathname: "/customer_confime" });
  };
  return (
    <div>
      <h2>登録画面</h2>
      {/* <button>戻る</button> */}
      <button onClick={Next}>次へ</button>
    </div>
  );
}

// const customerinput = () => {
//   return { CustomerInput };
// };
