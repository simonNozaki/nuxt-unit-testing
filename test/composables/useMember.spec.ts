// @vitest-environment nuxt
import { describe, it, expect, beforeEach } from "vitest"
import { initMemberState } from "../foundations/state/member"

describe("#setMember", () => {
  describe("メンバーが選択されていない場合", () => {
    beforeEach(() => {
      initMemberState()
    })

    it("メンバーを選択できる", async () => {
      const { setMember, current } = useMember()
      expect(current.value).toBeUndefined()

      await setMember(1)
      expect(current.value?.id).toBe(1)
    })
  })

  describe("すでに選択されている場合", () => {
    const { setMember, current } = useMember()
    beforeEach(async () => {
      initMemberState()
      await setMember(1)
    })

    it("他のメンバーを選択できる", async () => {
      await setMember(2)
      expect(current.value?.id).toBe(2)
    })
  })
})

describe("#resetMember", () => {
  describe("メンバーが選択されている場合", () => {
    const { setMember, resetMember, current } = useMember()
    beforeEach(async () => {
      initMemberState()
      await setMember(1)
    })

    it("選択を解除できる", () => {
      resetMember()
      expect(current.value).toBeUndefined()
    })
  })
})
