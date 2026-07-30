<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { page } from '$app/stores'
  import { categoryMeta, sessions, type Rum } from './roadmap'
  import RumCard from './rum-card.svelte'

  function sessionPriceRange(rums: Rum[]) {
    let low = 0
    let high = 0
    let plus = false
    for (const { priceRange } of rums) {
      const range = priceRange.match(/^(\d+) to (\d+)$/)
      if (range) {
        low += Number(range[1])
        high += Number(range[2])
      } else {
        const price = parseInt(priceRange, 10)
        low += price
        high += price
        if (priceRange.endsWith('+')) plus = true
      }
    }
    return `$${low} → $${high}${plus ? '+' : ''}`
  }

  async function openFromHash(hash: string) {
    if (typeof document === 'undefined' || !hash.startsWith('#session-')) return
    await tick()
    const el = document.getElementById(hash.slice(1))
    if (el instanceof HTMLDetailsElement) {
      el.open = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // this is broken for some reason
  // see: https://github.com/sveltejs/eslint-plugin-svelte/issues/652
  // eslint-disable-next-line svelte/valid-compile
  $: void openFromHash($page.url.hash)

  onMount(() => {
    void openFromHash(location.hash)
  })
</script>

<section class="container mx-auto grid h-full grid-rows-[auto_1fr] gap-2">
  <h3
    class="text-center text-3xl xs:text-4xl sm:text-5xl text-bison-theme-bg font-bison font-semibold brightness-50"
  >
    <a
      class="hover:underline"
      href="https://shamefultikiroom.com/vancouver/adventure/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Shameful
    </a>
    Rum Roadmap
  </h3>
  <div class="min-h-0 h-full overflow-y-auto px-2 pb-2">
    <ul class="mx-auto flex max-w-3xl flex-col gap-2">
      {#each sessions as session (session.id)}
        <li>
          <details
            id="session-{session.id}"
            name="rum-sessions"
            class="group rounded-lg bg-bison-theme-fg/40 open:bg-bison-theme-fg/60"
          >
            <summary
              class="flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2 list-none [&::-webkit-details-marker]:hidden hover:bg-bison-theme-fg/40"
            >
              <span
                class="min-w-0 text-bison-theme-bg font-bison font-semibold"
              >
                Session {session.id}: {session.title}
              </span>
              <span class="ml-auto flex min-w-0 flex-wrap justify-end gap-1">
                {#each session.rums as rum (rum.slug)}
                  <span
                    class="rounded px-1 py-px text-[10px] font-bold uppercase tracking-wide {categoryMeta[
                      rum.category
                    ].badgeClass}"
                  >
                    {categoryMeta[rum.category].label}
                  </span>
                {/each}
                <span
                  class="inline-flex w-[11ch] justify-center whitespace-nowrap rounded border border-bison-theme-bg/60 py-px font-mono text-[10px] font-bold text-bison-theme-bg"
                >
                  {sessionPriceRange(session.rums)}
                </span>
              </span>
              <svg
                class="h-4 w-4 shrink-0 text-bison-theme-bg transition-transform group-open:rotate-180"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
            </summary>
            <div class="px-3 pb-3">
              <p class="mb-2 text-sm text-bison-theme-bg">{session.intro}</p>
              <div class="grid gap-2 sm:grid-cols-2">
                {#each session.rums as rum (rum.slug)}
                  <RumCard {rum} />
                {/each}
              </div>
            </div>
          </details>
        </li>
      {/each}
    </ul>
  </div>
</section>
