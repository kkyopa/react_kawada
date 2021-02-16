import React, { ReactElement } from "react";
import { NameInput, NameInputProps } from "../atoms/NameInput";
import { GenderSelect, GenderSelectProps } from "../atoms/GenderSelect";
import { HumanRegister } from "../../services/User";
import { DEFAULT_FORM_VALUE } from "../../services/User";

export type humanDataInputProps = NameInputProps & GenderSelectProps;

// ②GenderSelectProps型定義とコンポーネントのpropsで渡したgenderとonGenderChangedを使用する

export function RegisterInput(props: humanDataInputProps): ReactElement {
  return (
    <div>
      <NameInput
        name={props.name}
        onNameChanged={(name) => {
          props.onNameChanged(name);
        }}
      />
      <GenderSelect
        gender={props.gender}
        onGenderChanged={(gender) => {
          props.onGenderChanged(gender);
        }}
      />
    </div>
  );
}
