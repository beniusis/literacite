<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CurrentBookStatus from './CurrentBookStatus.vue';
import type { BookProps } from '@/interfaces';
import { useBooksStore } from '@/stores';
import { ref } from 'vue';

const props = defineProps<{
  isOpen: boolean;
  book: BookProps;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { addBook, updateBookStatus, isAlreadyAdded } = useBooksStore();

const selectedStatus = ref(props.book.status);
</script>

<template>
  <Dialog :open="props.isOpen" @update:open="emit('close')">
    <DialogScrollContent class="gap-8">
      <DialogHeader>
        <DialogTitle>{{ props.book.volumeInfo.title }}</DialogTitle>
        <DialogDescription class="text-justify">
          {{ props.book.volumeInfo.description ?? 'No description available.' }}
        </DialogDescription>
      </DialogHeader>

      <div class="flex flex-col items-center justify-center">
        <div class="flex w-full items-center justify-start gap-4">
          <img
            v-if="props.book.volumeInfo.imageLinks"
            class="rounded-md object-cover"
            :src="props.book.volumeInfo.imageLinks.thumbnail"
            :alt="`Cover of ${props.book.volumeInfo.title}`"
            loading="lazy"
          />
          <div class="flex flex-col">
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Authors:</span>
              {{ props.book.volumeInfo.authors.join(', ') }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Publisher:</span>
              {{ props.book.volumeInfo.publisher ?? 'No data' }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Published date:</span>
              {{ props.book.volumeInfo.publishedDate ?? 'No data' }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Pages:</span>
              {{
                props.book.volumeInfo.pageCount
                  ? `${props.book.volumeInfo.pageCount} pages`
                  : 'No data'
              }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Categories:</span>
              {{
                props.book.volumeInfo.categories
                  ? props.book.volumeInfo.categories.join(', ')
                  : 'No data'
              }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Average rating:</span>
              {{ props.book.volumeInfo.averageRating ?? 'No data' }}
            </p>
            <p class="text-sm text-muted-foreground">
              <span class="font-bold">Rating count:</span>
              {{ props.book.volumeInfo.ratingsCount ?? 'No data' }}
            </p>
            <p
              v-if="isAlreadyAdded(props.book)"
              class="flex items-center justify-start gap-4 text-sm text-muted-foreground"
            >
              <span class="font-bold">Status:</span>
              <CurrentBookStatus v-model="selectedStatus" />
            </p>
          </div>
        </div>
      </div>

      <DialogFooter class="gap-2">
        <DialogClose as-child>
          <Button
            v-if="!isAlreadyAdded(props.book)"
            @click="addBook(props.book)"
            data-testid="add-to-list-btn"
            >Add to my books</Button
          >
        </DialogClose>
        <DialogClose as-child>
          <Button
            v-if="isAlreadyAdded(props.book)"
            @click="updateBookStatus(props.book, selectedStatus)"
            :disabled="selectedStatus === undefined"
            data-testid="book-save-btn"
            >Save</Button
          >
        </DialogClose>
        <DialogClose as-child>
          <Button variant="destructive" @click="selectedStatus = props.book.status ?? undefined"
            >Close</Button
          >
        </DialogClose>
      </DialogFooter>
    </DialogScrollContent>
  </Dialog>
</template>
