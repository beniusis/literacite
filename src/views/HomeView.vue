headerheader
<script setup lang="ts">
import { Header, Navigation, ReadingProgress, SearchBar } from '@/components';
import { ref } from 'vue';

const searchValue = ref('');
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header>
        <Navigation />
        <h1 class="sr-only">literacite</h1>
        <ReadingProgress
          class="hidden sm:block"
          title="Today's Progress"
          :pages-read="10"
          :pages-total="20"
        />
        <div class="relative ml-auto flex-1 md:grow-0">
          <SearchBar v-model:search-value="searchValue" />
        </div>
      </Header>
    </div>
  </div>
</template>
