import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Box } from "@material-ui/core";
import { UserContext } from "../App";
import { RegisterInput } from "../../components/block/RegisterInput";
import "../../styles/App.css";

import * as User from "../../services/User";

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

  const onNameChanged = (count: number, name: string) => {
    const newHuman = TestHuman.slice();
    newHuman[count - 1].name = name;
    setTestHuman(newHuman);
  };

  const Input = () => {
    const humanContent = [];
    // let flg = false;
    for (let count = 1; count <= TestHuman.length; count++) {
      const delBth = <Grid container className={classes.delBtnBox}></Grid>;

      humanContent.push(
        <RegisterInput
          name={TestHuman[count - 1].name}
          onNameChanged={(name) => {
            onNameChanged(count, name);
          }}
        />
      );
    }

    return (
      <Box border={1} borderColor="text.primary" borderRadius={16} p={1}>
        {humanContent}
      </Box>
    );
  };

  return (
    <div>
      <Box className={classes.HumanBox}>ユーザー登録画面</Box>
      <Box>{Input}</Box>
      <button onClick={Next}>次へ</button>
    </div>
  );
}
