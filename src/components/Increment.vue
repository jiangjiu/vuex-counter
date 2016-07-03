<template>
  <div>
    <button @click="increment">增加1</button>
    <button @click="decrement">减少1</button>
  </div>
</template>

<script>
  import {incrementCounter, decrementCounter} from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        increment: incrementCounter,
        decrement: decrementCounter
      }
    }
  }
</script>
