<script setup lang="ts">
import { Navigation } from './Navigation';
</script>

<template>
  <header
    class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
  >
    <Navigation />
    <h1 class="font-headland text-xl font-semibold tracking-wide sm:sr-only">literacite</h1>
  </header>
</template>
