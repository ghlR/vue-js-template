<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const bb = ref([
  2, 3, 4, 5,
])
</script>

<template>
  <h1>{{ msg }}

  </h1>
  <div class="2222" b="2222" c="333" d="2222" sdjhdd="ssssss"></div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a ccc="ssss" href="https://vuejs.org/guide/quick-start.html#local" a="_blank" b="_blank"
      target="_blank">create-vue</a>, the official Vue
    + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <button type="button" v-for="(item) in bb" :key="item">{{ item }}

  </button>
  <div class="test">
    <div class="aaa">aaa</div>
  </div>
</template>

<style lang="less" scoped>
.test {
  position: absolute;
  top: 0;
  width: 100px;
}
</style>
