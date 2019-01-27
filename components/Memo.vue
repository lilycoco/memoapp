<template>
  <div
    class = "memo"
    :style ="{
      top: `${toppo}px`,
      left: `${left}px`,
      background: `${background}`
    }">
    <div
      class = "handle"
      @mousedown = "onMousedown">
      <div
        class="minus-btn"
        @click="$emit('minus')">
        <span>×</span>
      </div>
    </div>
    <editor :index = "index"/>
    <Color :index = "index"/>
  </div>
</template>

<script>
import Editor from '~/components/Editor'
import Color from '~/components/Color'
export default {
  props: {
    toppo: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      default: 'rgb(248, 236, 236)'
    }
  },
  components: {
    Editor,
    Color
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  background: rgb(248, 236, 236);
  width: 200px;
  height: 300px;
}

.handle{
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #900;
  cursor: move;
}

.minus-btn {
  position: fixed;
  margin: 8px 0px 0px 8px;
  border-radius: 50%;
  background: #fff;
  border: #666 2px solid;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.minus-btn:hover {
  transform: scale(1.1);
}

.minus-btn > span {
  font-size: 20px;
  display: inline-block;
  margin-top: -3px;
  font-weight: bold;
  color: #666;
}
</style>
