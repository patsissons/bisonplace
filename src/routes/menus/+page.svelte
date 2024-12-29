<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import data from './menus.json'

  type Menu = {
    fg?: string
    bg?: string
    name?: string
    path?: string
    sheetPath?: string
  }
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

  function menuName(menuId: MenuId) {
    const menu = menuById(menuId)
    if (menu.name) return menu.name

    const m = /^(\d+)([WS])$/.exec(menuId)
    if (!m) return menuId

    return `${m[1]} ${menuSuffix(m[2])}`

    function menuSuffix(suffix: string) {
      switch (suffix) {
        case 'S':
          return 'Summer'
        case 'W':
        default:
          return 'Winter'
      }
    }
  }
</script>

<section
  class="container mx-auto grid grid-rows-[auto_auto_1fr] place-items-center gap-2 h-full"
>
  <h3
    class="text-bison-theme-bg text-5xl xs:text-6xl sm:text-7xl font-orbitron font-semibold brightness-50"
  >
    Menus
  </h3>
  <nav class="flex flex-wrap items-center justify-center gap-1 px-2">
    {#each menuIds as menuId}
      {@const selected = menuId === selectedMenuId}
      <a
        class="{selected
          ? 'bg-bison-theme-fg text-black hover:bg-white'
          : 'bg-bison-theme-bg text-white hover:bg-black'} font-bold py-0.5 px-2 rounded"
        href="#{menuId}"
      >
        {menuName(menuId)}
      </a>
    {/each}
  </nav>
  <div class="place-content-center px-2 h-full overflow-y-auto">
    {#if selectedMenu}
      {@const selectedMenuPath = selectedMenu.path || `${selectedMenuId}.png`}
      {@const selectedMenuSheetPath = selectedMenu.sheetPath}

      {#if selectedMenuSheetPath}
        <div
          class="relative transition-transform duration-700 [transform-style:preserve-3d] lg:hover:[transform:rotateY(180deg)]"
        >
          <a
            class="relative [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
            href="/menus/{selectedMenuPath}"
          >
            <img
              class="min-w-[320px]"
              src="/menus/{selectedMenuPath}"
              alt="{selectedMenu.name || selectedMenuId} menu"
            />
          </a>
          <a
            class="absolute top-0 left-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
            href="/menus/{selectedMenuSheetPath}"
          >
            <img
              class="min-w-[320px]"
              src="/menus/{selectedMenuSheetPath}"
              alt="{selectedMenu.name || selectedMenuId} sheet"
            />
          </a>
        </div>
      {:else}
        <a href="/menus/{selectedMenuPath}">
          <img
            class="min-w-[320px]"
            src="/menus/{selectedMenuPath}"
            alt="{selectedMenu.name || selectedMenuId} menu"
          />
        </a>
      {/if}
    {:else}
      <div class="grid place-content-center px-2">
        <p class="italic">Loading menu...</p>
      </div>
    {/if}
  </div>
</section>
