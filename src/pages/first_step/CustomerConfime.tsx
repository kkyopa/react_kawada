import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Box } from "@material-ui/core";
import { UserContext } from "../App";

const useStyles = makeStyles(() =>
  createStyles({
    gridCenter: {
      justify: "center",
      alignItems: "center",
      spacing: 1,
    },
    HumanBox: {
      marginBottom: "20px",
    },
    delBtnBox: {
      justifyContent: "center",
      marginBottom: "10px",
    },
  })
);

export default function CustomerConfime(
  props: RouteComponentProps
): ReactElement {
  const { TestHuman: TestHuman, setTestHuman: setTestHuman } = React.useContext(
    UserContext
  );

  const Next = () => {
    props.history.push({ pathname: "/customer_complete" });
  };
  const Back = () => {
    props.history.push({ pathname: "/customer_input" });
  };

  const humanData = () => {
    const humanData = [];
    for (let count = 1; count <= TestHuman.length; count++) {
      const human = TestHuman[count - 1];
      humanData.push(
        <Grid>
          <Grid>
            <Grid>お名前</Grid>
            <Grid item xs={9}>
              <div>{human.name}</div>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return humanData;
  };

  return (
    <div>
      <h2>こちらでよろしいでしょうか?</h2>
      {humanData()}
      <button onClick={Back}>戻る</button>
      <button onClick={Next}>次へ</button>
    </div>
  );
}
