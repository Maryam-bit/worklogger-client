<template>
    <div class="breadcrumbs">
      <ul>
        <li v-for="(breadcrumb, index) in breadcrumbData" :key="index">
          <router-link aria-label="home" :to="`${breadcrumb.linkTo}`"
            ><i :class="`${breadcrumb.icon}`"></i>
            {{ breadcrumb.name }}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script setup>
const props = defineProps({
  breadcrumbData: {
    type: Array,
    required: true,
    default() {
      return [
        { name: "Home", icon: "fa fa-home", linkTo: "/" },
        { name: "Home", icon: "fa fa-home", linkTo: "/" },
        { name: "Home", icon: "fa fa-home", linkTo: "/" },
      ];
    },
  },
});
console.log(props);
</script>

<style lang="scss" scoped></style>
