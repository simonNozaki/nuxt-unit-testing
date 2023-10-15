import { MemberModel } from "../../types/member";

import mocks from "./members.json";
const members = mocks as MemberModel[]

export default defineEventHandler<MemberModel[]>((_) => {
  return members
})
