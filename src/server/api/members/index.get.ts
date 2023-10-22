import { MemberModel } from "../../types/member";

import mocks from "./members.json";
const members = mocks as MemberModel[]

export default defineEventHandler<MemberModel[]>((_) => {
  // NOTE: サンプルコードなのでモックを返しているがここは好きな処理を挟んでOK
  return members
})
