<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import data from './menus.json'

  type Menu = { fg?: string; bg?: string; name?: string }
  type MenuId = keyof typeof data.menus

  const menuIds = Object.keys(data.menus) as MenuId[]
  let selectedMenuId: MenuId | undefined

  $: selectedMenu = selectedMenuId ? menuById(selectedMenuId) : undefined

  // this is broken for some reason
  // see: https://github.com/sveltejs/eslint-plugin-svelte/issues/652
  // eslint-disable-next-line svelte/valid-compile
  $: if ($page.url.hash) {
    selectedMenuId = $page.url.hash.slice(1) as MenuId
  }

  function menuById(id: MenuId) {
    return data.menus[id] as Menu
  }

  onMount(() => {
    if (!selectedMenuId) {
      selectedMenuId = data.current as MenuId
    }
  })
</script>

<section class="container mx-auto flex-1 flex flex-col items-center gap-2">
  <h3
    class="text-bison-neon-fg text-xl font-orbitron font-semibold brightness-50"
  >
    Menus
  </h3>
  <nav class="flex flex-wrap items-center justify-center gap-1 px-2">
    {#each menuIds as menuId}
      {@const menu = menuById(menuId)}
      {@const selected = menuId === selectedMenuId}
      <a
        class="bg-bison-neon-bg hover:brightness-110 text-white font-bold py-0.5 px-2 rounded"
        class:bg-bison-neon-fg={selected}
        class:text-black={selected}
        href="#{menuId}"
      >
        {menu.name || menuId}
      </a>
    {/each}
  </nav>
  {#if selectedMenu}
    <a class="flex-1 overflow-y-auto px-2" href="/menus/{selectedMenuId}.png">
      <img
        class="min-w-[320px]"
        src="/menus/{selectedMenuId}.png"
        alt="{selectedMenu.name || selectedMenuId} menu"
      />
    </a>
  {:else}
    <div class="flex-1 flex items-center justify-center px-2">
      <p class="italic">Loading menu...</p>
    </div>
  {/if}
</section>
