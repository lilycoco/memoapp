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
    onInput(e) {
      this.$store.commit('updateText', {
        index: this.index,
        text: e.target.value
      })
    }
  }
}
</script>

<style>
.editor {
  position: absolute;
  top: 40px;
  left: 0;
  width: 200px;
  bottom: 0;
  border: none;
  background: transparent;
  color: rgb(90, 90, 90);
  padding: 15px;
  font-size: 20px;
}
</style>
