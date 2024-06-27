<script setup lang="ts">
import {
  Books,
  Filter,
  Header,
  ProgressInput,
  ReadingProgress,
  SearchBar,
  Settings
} from '@/components';
import { useBooksStore, useProgressStore, useSettingsStore } from '@/stores';
import { computed, ref } from 'vue';
import type { BookProps } from '@/interfaces';
import { storeToRefs } from 'pinia';
import { useBooks } from '@/composables';

const { allBooks, readBooks, readingBooks, toReadBooks } = storeToRefs(useBooksStore());
const { numOfPagesReadToday } = storeToRefs(useProgressStore());
const { pagesPerDay } = storeToRefs(useSettingsStore());

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
  <div class="flex min-h-screen flex-col items-center bg-muted/40">
    <div class="flex flex-col items-center sm:py-4">
      <Header>
        <h1 class="sr-only">literacite</h1>
        <SearchBar v-model:search-value="searchValue" @search="searchForBooks" />
      </Header>

      <main class="container flex max-w-fit flex-col gap-4 p-4">
        <div class="flex flex-col items-center justify-between gap-4">
          <ReadingProgress
            title="Pages read today"
            :pagesRead="numOfPagesReadToday"
            :pagesTotal="pagesPerDay"
          />
          <div class="space-x-2">
            <Filter v-model="selectedFilter" />
            <ProgressInput />
            <Settings />
          </div>
        </div>

        <Books :books="filteredBooks" />
      </main>
    </div>
  </div>
</template>
