<template>
  <div class="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
    <div
      class="mx-auto flex flex-col items-center justify-center space-y-2 text-pretty px-1 text-center"
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        class="h-10 w-10 text-muted-foreground"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="11" r="1" />
        <path
          d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0"
        />
        <path d="M17 18.5a9 9 0 1 0-10 0" />
      </svg>

      <h3 class="text-lg font-semibold text-primary">Could not find any books in this section</h3>
      <p class="text-sm text-muted-foreground">Try adding one to your collection</p>
    </div>
  </div>
</template>
