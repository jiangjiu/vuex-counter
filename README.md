# Vuex 计算器构建实例

最近想熟悉一下这个状态管理的神器，写了一下尤大大的小 demo，文档中说**增加一个表单组件和之前的按钮比起来相对棘手**，这里把遇到的小问题记录一下。

如果对你有帮助的话,欢迎 star~

[我的github ^_^](https://github.com/jiangjiu/blog-md/issues/11)

![](https://raw.githubusercontent.com/jiangjiu/vuex-counter/master/src/assets/1.jpg)

## 安装
环境还是使用官方的 vue-cli 脚手架进行搭建，废话不多说。

```bash
//	克隆这个项目后输入以下命令进入开发模式
npm install
npm run dev
```

## Vuex数据流

1. Action决定了对 store 做出什么样的修改，比如说通过 dispatch 一个 INCREMENT 的 mutation 进行增加 state.count 值。
2. mutation 函数是来详细描述修改 store 的过程。
3. 组件再从 store 的 Getter 函数中获得组件需要的数据，最终渲染到组件完成更新。

整个过程清晰明了，单向的数据流动和 redux 的理念十分相似。

**官网上有 increment 的教程，相对简单些，这些就略去不谈，说说教程上没有的~**

## 表单组件
教程上说，直接在属于 Vuex 的 state 上使用 v-model 会比较恶心：

```js
<input v-model="obj.message">
```

>假设这里的 obj 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，v-model 会试图直接修改 obj.message。在严格模式中，由于这个修改不是在 mutation handler 中执行的, 这里会抛出一个错误。

但是，这个双向绑定在处理大量表单这种业务上是非常好用的，难道要直接舍掉么？当然不会~

看代码先：

```js
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
```

以上就是一个包含 input 的表单组件，可以看到 v-model 和 debounce 这些指令都是正常书写的，秘诀就是v-model 绑定了一个计算属性，**通过计算属性的 getter 和 setter 函数触发 Vuex 的 getters 和 actions 函数，从而避免直接修改state**。

这样也比绑定一个属性上去再监听变化少了一步，重要的是 v-model 这样的指令可以继续完美的使用了~





