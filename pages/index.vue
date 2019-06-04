<template>
  <section
    class="container"
    @mousemove="onMousemove"
    @mouseup="onMouseup">
    <memo
      v-for="(mm, index) in $store.state.memoList"
      :key="index"
      :toppo="mm.toppo"
      :left="mm.left"
      :background="mm.background"
      :zIndex="mm.zIndex"
      :index="index"
      :text="mm.text"
      :value="$store.getters.memoData(index).text"
      @dragStart="onDragStart($event, index)"
      @minus="minusMemo(index)"/>
    <plus-btn @plus = "plusMemo"/>
  </section>
</template>
<script>
import Memo from '~/components/Memo.vue'
import PlusBtn from '~/components/PlusBtn.vue'

export default {
  components: {
    Memo,
    PlusBtn
  },
  fetch({ store }) {
    return store.dispatch('getMemoList')
  },
  data() {
    return {
      draggingIndex: null,
      prevX: null,
      prevY: null
    }
  },
  mounted() {
    this.cancelerId = setInterval(() => {
      this.$store.dispatch('getMemoList')
    }, 100)
  },
  destroyerd() {
    clearInterval(this.cancelerId)
  },
  methods: {
    async plusMemo() {
      const widthCount = Math.floor(window.innerWidth / 250)
      await this.$store.dispatch('postMemoList', [
        ...this.$store.state.memoList,
        {
          toppo: Math.floor(this.$store.state.memoList.length / widthCount) * 350,
          left: (this.$store.state.memoList.length % widthCount) * 250,
          text: '',
          zIndex: 1
        }
      ])
    },
    minusMemo(index) {
      this.$store.commit('reduceMemo', index)
    },
    onDragStart({ x, y }, index) {
      this.$store.commit('forward', index)
      this.draggingIndex = index
      this.prevX = x
      this.prevY = y
    },
    onMousemove(e) {
      if (this.draggingIndex === null) return
      const x = e.pageX
      const y = e.pageY
      const target = { ...this.$store.state.memoList[this.draggingIndex] }
      target.left += x - this.prevX
      target.toppo += y - this.prevY
      this.$store.commit('mouseMove', {
        draggingIndex: this.draggingIndex,
        target
      })
      this.prevX = x
      this.prevY = y
    },
    onMouseup() {
      this.draggingIndex = null
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../assets/back2.jpg');
  user-select: none;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
