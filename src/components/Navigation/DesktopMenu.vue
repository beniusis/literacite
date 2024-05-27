<script setup lang="ts">
import { Home, LineChart, Settings } from 'lucide-vue-next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { RouterLink } from 'vue-router';
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <RouterLink
              to="/"
              class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground"
              :class="
                $route.name === 'home'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground'
              "
              aria-label="Home"
            >
              <Home class="h-5 w-5" />
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right"> Home </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <RouterLink
              to="/analytics"
              class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground"
              :class="
                $route.name === 'analytics'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground'
              "
              aria-label="Analytics"
            >
              <LineChart class="h-5 w-5" />
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right"> Analytics </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
    <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <RouterLink
              to="/settings"
              class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground"
              :class="
                $route.name === 'settings'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground'
              "
              aria-label="Settings"
            >
              <Settings class="h-5 w-5" />
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right"> Settings </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>
</template>
