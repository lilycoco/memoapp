<template>
  <textarea
    :value="$store.getters.memoData(index).text"
    @input="onInput"
    class="editor" />
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
    onInput(e){
      this.$store.commit('updateText', {
        index: this.index,
        text: this.target.value
      })
    }
  }
}
</script>

<style>
.editor {
  position: absolute;
  top: 50px;
  left: 0;
  width: 200px;
  bottom: 0;
  border: none;
  background: transparent;
  color: #fff;
  padding: 15px;
  font-size: 20px;
}
</style>
