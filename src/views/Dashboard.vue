<template>
  <div class="add-logs m-2 mt-4">
    <div class="container-fluid app-table">
      <div class="row">
        <div class="col-md-8">
          <searchbox />
        </div>
        <div class="col-md-4 text-end float-right">
          <button class="app-btn">Export</button>
        </div>
      </div>
      <hr />
      <div class="row">
        <app-table />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
