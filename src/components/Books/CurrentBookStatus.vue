<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BookCheck, BookOpen, BookPlus } from 'lucide-vue-next';
</script>

<template>
  <ToggleGroup type="single">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="READ" aria-label="mark as read">
            <BookCheck class="h-4 w-4" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>Read</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="READING" aria-label="mark as reading">
            <BookOpen class="h-4 w-4" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>Reading</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="TO READ" aria-label="mark as to read" data-testid="to-read-btn">
            <BookPlus class="h-4 w-4" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>To Read</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </ToggleGroup>
</template>
