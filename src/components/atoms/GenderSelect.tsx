import React, { ReactElement } from "react";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Gender } from "../../services/User";

export interface GenderSelectProps {
  gender: Gender;
  onGenderChanged: (gender: Gender) => void;
}

export function GenderSelect(props: GenderSelectProps): ReactElement {
  // ①GenderSelectコンポーネント作成
  // UserからGender型を呼び寄せる
  // GenderSelectProps型定義

  const RadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGender = e.target.value;
    props.onGenderChanged(selectedGender);
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={3}>
          性別
        </Grid>
        <Grid item xs={9}>
          <RadioGroup value={props.gender} row onChange={RadioClick}>
            {Object.values(Gender).map((gender) => {
              return (
                <FormControlLabel
                  key={gender}
                  value={gender}
                  control={<Radio />}
                  label={gender}
                />
              );
            })}
          </RadioGroup>
        </Grid>
      </Grid>
    </div>
  );
}
