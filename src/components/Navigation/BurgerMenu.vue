<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Home, LineChart, Menu, Settings } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="icon" variant="ghost" class="sm:hidden" aria-label="Toggle menu">
        <Menu class="size-5" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="min-w-fit max-w-60 sm:max-w-60">
      <SheetHeader class="sr-only">
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Select the page you want to visit</SheetDescription>
      </SheetHeader>
      <nav class="grid gap-6 text-lg font-medium hover:text-foreground">
        <RouterLink
          to="/"
          class="flex items-center gap-4 px-2.5"
          :class="{
            'text-foreground': $route.name === 'home',
            'text-muted-foreground': $route.name !== 'home'
          }"
        >
          <Home class="size-5" />
          Home
        </RouterLink>
        <RouterLink
          to="/analytics"
          class="flex items-center gap-4 px-2.5 hover:text-foreground"
          :class="{
            'text-foreground': $route.name === 'analytics',
            'text-muted-foreground': $route.name !== 'analytics'
          }"
        >
          <LineChart class="size-5" />
          Analytics
        </RouterLink>
        <RouterLink
          to="/settings"
          class="flex items-center gap-4 px-2.5 hover:text-foreground"
          :class="{
            'text-foreground': $route.name === 'settings',
            'text-muted-foreground': $route.name !== 'settings'
          }"
        >
          <Settings class="size-5" />
          Settings
        </RouterLink>
      </nav>
    </SheetContent>
  </Sheet>
</template>
