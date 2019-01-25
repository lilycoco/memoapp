<template >
  <div class= "dragArea">
    <div
      class="VueToNuxtmemo"
      :style="{
        top: `${toppo}px`,
        left: `${left}px`
      }"
      @mousemove="$emit('onMousemove')"
      @mousedown="onMousemove"
      @mouseup="onMouseup"
      >
      <div
        class="Remove-btn"
        @click="$emit('remove')" >
        <span class="minus">x</span>
      </div>
        <textarea class="Memo Text"></textarea>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      isDragging: false,
      prevX: 0,
      prevY: 0
    }
  },
  methods: {
    onMousedown(e) {
      console.log(e)
    },
    onMouseup(e) {
      console.log(e)
    },
    onMousemove(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.VueToNuxtmemo {
  position: fixed;
  overflow: hidden;
  height: 300px ;
  width: 200px ;
  background-color:#bb0808;
}

.Remove-btn {
  /* bottom:20px; */
  /* right:20px; */
  height: 20px;
  width: 20px;
  background-color:white;
  border-radius: 100px;
  border:black;
  /* padding:0; */
  position:fixed;
}

.minus {
  height: 30px;
  width: 30px;
  color:black;
  font-weight: bold;
}
.Memo {
  position: absolute;
  top: 0;
  left: 0;
}

.Text {
  top: 30px;
  height: 300px ;
  width: 200px ;
  background-color:#af2929;
  border-color:#af2929;
}

</style>
