<script setup></script>

<template>
  <div class="flex-col w-full">
    <header
      class="px-(--p-x) py-(--p-y) border-(length:--border-width) flex justify-center bg-(--color-background-header) text-(--color-text-header)"
    >
      <h1>Result</h1>
    </header>
    <section class="h-full flex grow-1 items-center justify-center">
      <p>{{ $route.query.result }}</p>
    </section>
  </div>
</template>
