import React, { ReactElement } from "react";
import { NameInput, NameInputProps } from "../atoms/NameInput";
import { HumanRegister } from "../../services/User";
import { DEFAULT_FORM_VALUE } from "../../services/User";

export function HumanDataInput(props: NameInputProps): ReactElement {
  return (
    <div>
      <NameInput
        name={props.name}
        onNameChanged={(name) => {
          props.onNameChanged(name);
        }}
      />
    </div>
  );
}
