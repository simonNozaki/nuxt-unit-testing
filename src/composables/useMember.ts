import type { MemberModel } from "~/server/types/member"

interface MemberCompose extends MemberState {
  list(): Promise<MemberModel[]>
  setMember(memberId: number): Promise<void>
  resetMember(): void
}

interface MemberState {
  current: Ref<MemberModel | undefined>
}

function setMember(state: MemberState): MemberCompose['setMember'] {
  return async (memberId) => {
    const members = await list()()
    const maybeMember = members.find((member) => member.id === memberId)
    if (!maybeMember) return

    state.current.value = maybeMember
  }
}

function resetMember(state: MemberState): MemberCompose['resetMember'] {
  return () => {
    state.current.value = undefined
  }
}

function list(): MemberCompose['list'] {
  return async () => {
    const { data, error } = await useFetch('/api/members')
    if (error.value) {
      // TODO
      return []
    }
    return data.value ?? []
  }
}

function createState(): MemberState {
  return {
    current: useState('current-member', () => undefined)
  }
}

export function useMember(): MemberCompose {
  const state = createState()
  return {
    list: list(),
    setMember: setMember(state),
    resetMember: resetMember(state),
    get current() {
      return readonly(state.current)
    }
  }
}
