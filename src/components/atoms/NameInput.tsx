import React, { ReactElement } from "react";
import { Grid, TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Gender } from "../../services/User";

const useStyles = makeStyles(() =>
  createStyles({
    errorcolor: {
      background: "rgb(245,0,89 )",
      width: "80%",
    },
    normalColor: {
      whdth: "80%",
    },
  })
);

export interface NameInputProps {
  name: string;
  // isErrName: boolean;
  onNameChanged: (name: string) => void;
}

export function NameInput(props: NameInputProps): ReactElement {
  const classes = useStyles();

  return (
    <div>
      名前
      <input
        type="text"
        value={props.name}
        onChange={(e) => {
          props.onNameChanged(e.target.value);
        }}
      />
    </div>
  );
}
