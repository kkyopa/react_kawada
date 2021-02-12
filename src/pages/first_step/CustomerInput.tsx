import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Box } from "@material-ui/core";
import { HumanDataInput } from "../../components/block/RegisterInput";
import "../../styles/App.css";
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
  })
);

export default function CustomerInput(
  props: RouteComponentProps
): ReactElement {
  const classes = useStyles();
  const { TestHuman: TestHuman, setTestHuman: setTestHuman } = React.useContext(
    UserContext
  );
  const Next = () => {
    props.history.push({ pathname: "/customer_confime" });
  };

  // const HumansInput = () => {
  //   <HumanDataInput
  //     name={"むず"}
  //     onNameChanged={(name) => {
  //       onNameChanged(count, name);
  //     }}
  //   />;
  // };

  return (
    <div>
      <Box className={classes.HumanBox}>ユーザー登録画面</Box>
      <button onClick={Next}>次へ</button>
    </div>
  );
}
