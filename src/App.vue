<template>
  <div
    :class="[
      `theme${colorScheme} 
    theme-size${sizeScheme}`,
      darkTheme ? 'dark-theme' : '',
    ]"
  >
    <div class="app-container">
      <View :isLoggedin="isLoggedin" />
    </div>
  </div>
</template>

<script setup>
import View from "./views/View.vue";
import { ref } from "vue";
const colorScheme = ref(1);
const sizeScheme = ref(1);
const darkTheme = ref(false);
const isLoggedin = ref(true);
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
@import "./assets/styles/responsive.scss";
</style>
