import React, { ReactElement } from "react";
import { FormControl, Select, MenuItem, Grid } from "@material-ui/core";
import { DEFAULT_FORM_VALUE } from "../../services/User";

export interface BirthDateInputProps {
  birtDate: {
    year: number;
    month: number | typeof DEFAULT_FORM_VALUE;
    date: number | typeof DEFAULT_FORM_VALUE;
  };
  onYearChanged: (year: number) => void;
  onMonthChanged: (month: number | typeof DEFAULT_FORM_VALUE) => void;
  onDateChanged: (date: number | typeof DEFAULT_FORM_VALUE) => void;
}

export function GenderSelect(props: BirthDateInputProps): ReactElement {
  // よーわからん

  return (
    <div>
      <Grid container direction="row" alignItems="center"></Grid>
    </div>
  );
}
