import { MemberModel } from "~/server/types/member";
import { registerEndpoint } from "nuxt-vitest/utils";

import mocks from "../mock/members.json";
const members = mocks as MemberModel[];

/**
 * NOTE:
 * - 実運用しているものよりはるかに簡易的に作っている。実際はもう少しオプションを与えられるよう細かく分解している。
 * - メソッド名が `initMemberState` ではあるが、ここでは簡易的にエンドポイントのモックのみ行う。
 */
export function initMemberState() {
  registerEndpoint('/api/members', () => (members))
}
