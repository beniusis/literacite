headerheader
<script setup lang="ts">
import { Content, Navigation, Header, SearchBar } from '@/components';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useBooksStore } from '@/stores';
import { computed, ref } from 'vue';
import { TABS } from '@/lib/data';
import type { Book, TabValue } from '@/lib/types';
import { storeToRefs } from 'pinia';
import { useBooks } from '@/composables';

const searchValue = ref('');
const currentTab = ref<string | number>('all');
const searchedBooks = ref<Book[]>([]);
const { allBooks, readBooks, readingBooks, toReadBooks } = storeToRefs(useBooksStore());

const searchForBooks = async () => {
  if (searchValue.value === '') return;

  const { loading, error, books } = await useBooks(searchValue.value);

  if (!loading.value && !error.value) {
    searchedBooks.value = books.value;
    currentTab.value = 'searched';
  }
};

const tabs = computed(() => {
  const books: Record<TabValue, Book[]> = {
    all: allBooks.value,
    read: readBooks.value,
    reading: readingBooks.value,
    'to read': toReadBooks.value,
    searched: searchedBooks.value
  };

  return TABS.map((tab) => {
    return {
      ...tab,
      books: books[tab.value]
    };
  });
});
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header>
        <Navigation />
        <h1 class="sr-only">literacite</h1>
        <div class="relative mr-auto flex gap-2">
          <SearchBar v-model:search-value="searchValue" @search="searchForBooks" />
        </div>
      </Header>

      <main class="w-full p-4">
        <Tabs v-model="currentTab">
          <TabsList>
            <TabsTrigger v-for="tab in tabs" :value="tab.value" :key="tab.value">
              {{ tab.title }}
            </TabsTrigger>
          </TabsList>

          <Content
            v-for="tab in tabs"
            class="h-full w-full flex-col border-none p-0 data-[state=active]:flex"
            :value="tab.value"
            :title="tab.title"
            :subtitle="tab.subtitle"
            :books="tab.books"
            :key="tab.value"
          />
        </Tabs>
      </main>
    </div>
  </div>
</template>
