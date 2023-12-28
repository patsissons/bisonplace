<script lang="ts">
  import '$lib/styles/app.css'
</script>

<div
  class="flex flex-col gap-2 min-h-screen bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-bison-neon-bg/50 from-25% to-bison-neon-fg/50"
>
  <header class="text-center px-2 py-0.5">
    <h1
      class="text-5xl xs:text-6xl sm:text-7xl text-bison-neon-bg font-orbitron font-semibold"
    >
      Welcome to BISON Place
    </h1>
  </header>

  <main class="flex-1 flex">
    <slot />
  </main>

  <footer class="text-center px-2 py-0.5" />
</div>
