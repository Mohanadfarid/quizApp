<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout"></component>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
