<script lang="ts">
  import { categoryMeta, type Rum } from './roadmap'

  export let rum: Rum

  let imageError = false
  let dialog: HTMLDialogElement

  $: src = rum.image ?? `/rums/${rum.slug}.png`
</script>

<div class="flex items-start gap-3 rounded-lg bg-bison-theme-fg/60 p-3">
  {#if imageError}
    <div
      class="grid h-24 w-16 xs:w-20 shrink-0 place-content-center rounded bg-bison-theme-bg/20 text-3xl"
      aria-hidden="true"
    >
      🥃
    </div>
  {:else}
    <button
      type="button"
      class="w-16 xs:w-20 shrink-0 cursor-zoom-in"
      aria-label="View {rum.name} bottle image"
      on:click={() => dialog.showModal()}
    >
      <img
        class="w-full object-contain"
        {src}
        alt="{rum.name} bottle"
        loading="lazy"
        on:error={() => (imageError = true)}
      />
    </button>
    <dialog
      bind:this={dialog}
      class="rounded-lg bg-bison-theme-fg p-0 [&::backdrop]:bg-black/60"
      on:click|self={() => dialog.close()}
    >
      <div class="flex flex-col items-center gap-2 p-4">
        <img
          class="max-h-[75dvh] max-w-[85dvw] object-contain"
          {src}
          alt="{rum.name} bottle"
        />
        <p class="text-center text-bison-theme-bg font-bison font-semibold">
          {rum.name}
        </p>
      </div>
    </dialog>
  {/if}
  <div class="min-w-0 flex-1">
    <h4 class="text-bison-theme-bg font-bison font-semibold">{rum.name}</h4>
    <div class="mt-1 flex flex-wrap items-center gap-2">
      <span
        class="rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wide {categoryMeta[
          rum.category
        ].badgeClass}"
      >
        {categoryMeta[rum.category].label}
      </span>
      <span class="text-sm text-bison-theme-bg/80">
        ${rum.priceRange.replace(' to ', '–')} / pour
      </span>
    </div>
    {#if rum.note}
      <p class="mt-1 text-sm italic text-bison-theme-bg/90">{rum.note}</p>
    {/if}
    {#if rum.tastingNotes}
      <p class="mt-1 text-sm text-bison-theme-bg">{rum.tastingNotes}</p>
    {/if}
  </div>
</div>
