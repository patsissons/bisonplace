<script lang="ts">
  import { page } from '$app/stores'
  import '$lib/styles/app.css'

  const pages = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Menus' },
    { href: '/rum', label: 'Rum Roadmap' },
  ]

  // this is broken for some reason
  // see: https://github.com/sveltejs/eslint-plugin-svelte/issues/652
  // eslint-disable-next-line svelte/valid-compile
  $: footerLinks = pages.filter(({ href }) => href !== $page.route.id)
</script>

<div
  class="h-[100dvh] min-w-[320px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-bison-theme-bg/50 from-25% to-bison-theme-fg/50"
>
  <div class="grid grid-rows-[auto_1fr_auto] gap-2 h-full">
    <header class="text-center px-2 py-0.5">
      {#if $page.route.id === '/'}
        <h1
          class="text-5xl xs:text-6xl sm:text-7xl text-bison-theme-bg font-bison font-semibold brightness-50"
        >
          Welcome to BISON Place
        </h1>
      {/if}
    </header>

    <main class="h-full overflow-hidden">
      <slot />
    </main>

    <footer class="flex flex-wrap justify-center gap-x-1 px-2 py-0.5">
      {#each footerLinks as { href, label } (href)}
        <a
          class="text-bison-theme-bg text-xl font-bison hover:bg-bison-theme-fg/40 hover:text-bison-theme-bg px-2 py-0.5 rounded"
          {href}
        >
          {label}
        </a>
      {/each}
      <a
        class="text-bison-theme-bg text-xl font-bison hover:bg-bison-theme-fg/40 hover:text-bison-theme-bg px-2 py-0.5 rounded"
        href="https://hello-there.patsissons.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        About me
      </a>
    </footer>
  </div>
</div>
