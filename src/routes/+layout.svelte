<script lang="ts">
  import { page } from '$app/stores'
  import '$lib/styles/app.css'

  // this is broken for some reason
  // see: https://github.com/sveltejs/eslint-plugin-svelte/issues/652
  // eslint-disable-next-line svelte/valid-compile
  $: isMenusPage = $page.route.id === '/menus'
</script>

<div
  class="flex flex-col gap-2 h-[100dvh] min-w-[320px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-bison-theme-bg/50 from-25% to-bison-theme-fg/50"
>
  <header class="text-center px-2 py-0.5">
    {#if $page.route.id === '/'}
      <h1
        class="text-5xl xs:text-6xl sm:text-7xl text-bison-theme-bg font-orbitron font-semibold brightness-50"
      >
        Welcome to BISON Place
      </h1>
    {/if}
  </header>

  <main class="flex-1 flex overflow-clip">
    <slot />
  </main>

  <footer class="text-center px-2 py-0.5">
    <a
      class="text-bison-theme-bg text-xl font-orbitron brightness-50"
      href={isMenusPage ? '/' : '/menus'}
    >
      {#if isMenusPage}
        Home
      {:else}
        Menus
      {/if}
    </a>
  </footer>
</div>
