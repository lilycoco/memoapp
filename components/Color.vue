<template>
  <div class="colors">
      <div
        @click="onClick"
        :style ="{
          background: 'rgb(245, 140, 140)'
        }"
        class="color color1"/>
      <div
        @click="onClick"
        :style ="{
          background: 'rgb(245, 179, 118)'
        }"
        class="color color2"/>
      <div
        @click="onClick"
        :style ="{
          background: 'rgb(252, 239, 129)'
        }"
        class="color color3"/>
      <div
        @click="onClick"
        :style ="{
          background: 'rgb(180, 252, 138)'
        }"
        class="color color4"/>
      <div
        @click="onClick"
        :style ="{
          background: 'rgb(152, 248, 252)'
        }"
        class="color color5"/>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClick(e) {
      this.$store.commit('changeColor', {
        index: this.index,
        background: e.target.style.background
      })
      console.log(e)
    }
  }
}
</script>

<style>
.colors {
  display:flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height:40px;
  bottom: 0;
  border: none;
}
.color {
  display:inline-flex;
  cursor: pointer;

}
.color1 {
  width: 40px;
  background: rgb(245, 140, 140);
}
.color2 {
  width: 40px;
  background: rgb(245, 179, 118);
}
.color3 {
  width: 40px;
  background: rgb(252, 239, 129);
}
.color4 {
  width: 40px;
  background: rgb(180, 252, 138);
}
.color5 {
  width: 40px;
  background: rgb(152, 248, 252);
}

</style>
