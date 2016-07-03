<template>
  <div>
    <h2>count is {{counterValue}}</h2>
  </div>
</template>

<script>
  import {getCount} from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        counterValue: getCount
      }
    }
  }
</script>