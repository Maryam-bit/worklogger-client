<template>
  <div class="view">
    <div class="leftbar">
      <sidebar v-if="isLoggedin"></sidebar>
    </div>
    <div class="rightbar">
      <topbar v-if="isLoggedin" />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isLoggedin: {
    type: Boolean,
    required: true,
    default() {
      return true;
    },
  },
});
console.log(props);
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  //  width: 50%;
}
.rightbar {
  width: 100%;
  // margin-left: -24px;
}
@media (max-width: 600px) {
  .rightbar {
    margin-left: 0px;
  }
}
</style>
