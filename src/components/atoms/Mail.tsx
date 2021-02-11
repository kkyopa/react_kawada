import React, { ReactElement } from "react";
export interface MailAddressProps {
  mailAddress?: string;
}

export default function MailAddress(props: MailAddressProps): ReactElement {
  const RegisterMailAddress = () => {
    // メールアドレス登録画面に遷移
  };
  if (props.mailAddress) {
    return <div>メールアドレス:{props.mailAddress}</div>;
  } else {
    return (
      <div>
        <h3>メールアドレス登録が必要になります。</h3>
        <button onClick={RegisterMailAddress}>メールアドレス登録へ</button>
      </div>
    );
  }
}
