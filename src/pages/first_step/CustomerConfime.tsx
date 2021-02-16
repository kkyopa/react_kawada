import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../styles/App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Box } from "@material-ui/core";
import { UserContext } from "../App";

const useStyles = makeStyles(() =>
  createStyles({
    gridBox: {
      justify: "center",
      alignItems: "center",
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
  const classes = useStyles();
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
          <Box border={1} borderColor="text.primary" borderRadius={16} p={1}>
            <Grid container direction="row" className={classes.gridBox}>
              <Grid item xs={3}>
                お名前
              </Grid>
              <Grid item xs={9}>
                <div>{human.name}</div>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.gridBox}>
              <Grid item xs={3}>
                性別
              </Grid>
              <Grid item xs={9}>
                <div>{human.gender}</div>
              </Grid>
            </Grid>
          </Box>
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
