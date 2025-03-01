<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="h-full flex flex-col gap-(--a-gap)">
    <main class="flex grow-1 justify-center">
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
