<template>
  <div>
    <input v-model="thisMessage" debounce="500">
  </div>
</template>

<script>
  import {updateCounter} from '../vuex/actions'
  import {getCount} from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        counterValue: getCount
      },
      actions: {
        update: updateCounter
      }
    },
    computed: {
      thisMessage: {
        get () {
          return this.counterValue
        },
        set (val) {
          this.update(val)
        }
      }
    }
  }
</script>