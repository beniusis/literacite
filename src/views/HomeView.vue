headerheader
<script setup lang="ts">
import { Books, Navigation, Filter, Header, SearchBar } from '@/components';
import { useBooksStore } from '@/stores';
import { computed, ref } from 'vue';
import type { BookProps } from '@/lib/types';
import { storeToRefs } from 'pinia';
import { useBooks } from '@/composables';

const { allBooks, readBooks, readingBooks, toReadBooks } = storeToRefs(useBooksStore());

const searchValue = ref('');
const searchedBooks = ref<BookProps[]>([]);
const selectedFilter = ref('all');

const filteredBooks = computed(() => {
  switch (selectedFilter.value) {
    case 'all':
      return allBooks.value;
    case 'read':
      return readBooks.value;
    case 'reading':
      return readingBooks.value;
    case 'to read':
      return toReadBooks.value;
    case 'search':
      return searchedBooks.value;
    default:
      return allBooks.value;
  }
});

const searchForBooks = async () => {
  if (searchValue.value === '') {
    searchedBooks.value = [];
    selectedFilter.value = 'all';
    return;
  }

  const { loading, error, books } = await useBooks(searchValue.value);

  if (!loading.value && !error.value) {
    searchedBooks.value = books.value;
    selectedFilter.value = 'search';
  }
};
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:py-4 sm:pl-14">
      <Header>
        <Navigation />
        <h1 class="sr-only">literacite</h1>
        <div class="relative mr-auto flex-1 gap-2 md:grow-0">
          <SearchBar v-model:search-value="searchValue" @search="searchForBooks" />
        </div>
      </Header>

      <main class="flex w-full flex-col gap-4 p-4">
        <div class="mr-auto">
          <Filter v-model="selectedFilter" />
        </div>

        <Books :books="filteredBooks" />
      </main>
    </div>
  </div>
</template>
