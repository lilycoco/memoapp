<template>
  <div
    class="VueToNuxtAdd"
    @click="$emit('plus')" >
    <span class="plus">+</span>
  </div>
</template>

<style>
.VueToNuxtAdd {
  bottom:20px;
  right:20px;
  height: 50px;
  width: 50px;
  background-color:white;
  border-radius: 100px;
  border:black;
  position:fixed;
}

.plus {
  height: 30px;
  width: 30px;
  color:black;
  font-weight: bold;
}
</style>

