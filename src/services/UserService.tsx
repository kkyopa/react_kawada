import * as User from "./User";

interface IApiErr {
  code: string;
  message: string;
}

interface IApiCommon {
  err: IApiErr;
  result: string;
}

interface ICostomerData {
  user_code: string;
  send_mail: boolean;
  uon: string;
}

export interface ICostomerResponse {
  common: IApiCommon;
  data: ICostomerData;
}

export async function getCustomer(
  Id:string
):Promise<ICostomerResponse> = {
const result: ICostomerResponse = {
  common: defaultCommon,
  data: defaultCostomerData,
};
const req = {
  id : Id,
}
try {
  const res = await apiJson.post<CostomerResponse>(api.API1,req);

  if (
    res.status === applicationCache.ResponseStatus
  ) {
    result.commom = res.data.common;
    result.data = res.data.data;
  } else {
    // エラー処理
  }
} catch (ex) {
  // サーバーから想定していないレスポンスコードがきたときの処理
}
return result;
}
