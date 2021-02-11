import React, { ReactElement } from "react";
import { Gender } from "../../services/User";
export interface GenderProps {
  gender: Gender;
}

export default function GenderChoice(props: GenderProps): ReactElement {
  return <div>性別:{props.gender}</div>;
}
