import React, { ReactElement } from "react";
export interface BirthDateProps {
  birthDate: Date;
}

export default function BirthDate(props: BirthDateProps): ReactElement {
  return (
    <div>
      生年月日:{props.birthDate.getFullYear()}年{props.birthDate.getMonth()}月
      {props.birthDate.getDate()}日
    </div>
  );
}
