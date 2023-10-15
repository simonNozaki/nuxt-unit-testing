<script lang="ts" setup>
const { list, setMember, resetMember, current } = useMember()
const members = await list()

function selectMember(memberId: number) {
  setMember(memberId)
}

function clear() {
  resetMember()
}

const currentMember = computed(() => current.value?.name ?? '選択されていません')
</script>

<template>
  <section>
    <p>{{ currentMember }}</p>
    <button @click="clear">選択解除</button>
    <ul>
      <li v-for="member in members" :key="member.id">
        <button type="button" @click="selectMember(member.id)"> {{ member.name }} </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
// TODO
</style>
