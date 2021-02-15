import React, { ReactElement } from "react";
import { NameInput, NameInputProps } from "../atoms/NameInput";
import { HumanRegister } from "../../services/User";
import { DEFAULT_FORM_VALUE } from "../../services/User";

// export interface RegisterInputProps {
//   humanLocal: HumanRegister[];
//   onNameChanged: (count: number, name: string) => void;
//   onDeleteClick: (count: number) => void;
// }

export function RegisterInput(props: NameInputProps): ReactElement {
  // const deleteButton = (count: number) => {
  //   if (count != 1) {
  //     return (
  //       <button
  //         onClick={() => {
  //           props.onDeleteClick(count);
  //         }}
  //         value={count}
  //       >
  //         追加削除
  //       </button>
  //     );
  //   } else {
  //     return undefined;
  //   }
  // };

  // const human = () => {
  //   const human = [];
  //   for (let count = 1; count <= props.name.length; count++) {
  //     human.push(
  //       <div>
  //         <h2>人間を追加</h2>
  //         <NameInput
  //           name={props.name}
  //           onNameChanged={(name) => {
  //             props.onNameChanged(name);
  //           }}
  //         />
  //         {/* {deleteButton(count)} */}
  //       </div>
  //     );
  //   }
  //   return human;
  // };

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
