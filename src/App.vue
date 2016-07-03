<template>
  <div id="app">
   <display></display>
    <increment></increment>
    <increment-amount></increment-amount>
  </div>
</template>

<script>
import Display from './components/Display'
import Increment from './components/Increment'
import IncrementAmount from './components/IncrementAmount.vue'
import store from './vuex/store'

export default {
  components: {
    Display,
    Increment,
    IncrementAmount
  },
  store
}
</script>

<style>

</style>
