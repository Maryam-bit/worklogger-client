<template>
  <div class="login-form">
    <h1 class="login-form-heading">Login to Worklogger</h1>
    <form @submit.prevent="signin">
      <span class="err-message">{{ errorMessage }}</span>
      <label class="login-form-label">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        class="login-form-input"
        required
        v-model="email"
      />

      <label class="login-form-label">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        class="login-form-input"
        required
        v-model="password"
        autocomplete="off"
      />

      <button class="app-btn login-form-button" type="submit">Login</button>

      <div class="text-center custom-checkbox">
        <input v-model="isRemember" type="checkbox" class="checkbox-input" />
        <label class="checkbox-label-text">Is Remember</label>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const isRemember = ref(false);
const errorMessage = ref("");

const signin = async () => {
  try {
    console.log("signing in");
    router.push({ name: "add-logs" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
