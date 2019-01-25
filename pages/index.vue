<template>
  <section class="container"
  @mousemove="onMousemove">
      <memo
        v-for="(position, index) in memoPositions"
        :key="index"
        :toppo="position.toppo"
        :left="position.left"
        @remove="removeMemo"/>
      <add @plus="plusMemo"/>
  </section>
</template>

<script>
import Memo from '~/components/Memo.vue'
import Add from '~/components/Add.vue'

export default {
  components: {
    Memo,
    Add
  },
  data() {
    return {
      memoPositions: [
        {
          toppo: 100,
          left: 30
        },
        {
          toppo: 150,
          left: 100
        },
        {
          toppo: 50,
          left: 150
        }
      ]
    }
  },
  methods: {
    plusMemo() {
      const widthCount = Math.floor(window.innerWidth /250)
      this.memoPositions = [
        ...this.memoPositions,
        { toppo: Math.floor( this.memoPositions.length / widthCount) * 350,
          left: 250* (this.memoPositions.length % widthCount)}
      ]
    },
    removeMemo(index) {
       this.memoPositions = [...this.memoPositions];
       this.memoPositions.splice(index,1);
    },
    onMousemove(index) {
      this.memoPositions = [...this.memoPositions];
      this.memoPositions={
        toppo: e.screenX,
        left: e.screenY
      }

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  background:url('../assets/backstar.jpg');
  background-size: cover;
  background-position: center center;
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
