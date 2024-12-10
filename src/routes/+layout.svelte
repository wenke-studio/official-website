<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { IconSettings, IconStack, IconUser } from "@tabler/icons-svelte";
  import "../app.css";

  let { children } = $props();

  let title: string = "Wenke Studio";
</script>

{#snippet brand(title: string)}
  <div class="flex items-center gap-2">
    <IconStack />
    <h3>{title}</h3>
  </div>
{/snippet}

{#snippet headerMenu()}
  <ul class="flex middle gap-2">
    <li>
      <a href="/">
        <IconSettings />
      </a>
    </li>
    <li>
      <a href="/">
        <IconUser />
      </a>
    </li>
  </ul>
{/snippet}

{#snippet header()}
  <header class="sticky top-0 z-10 px-8 py-4 backdrop-blur-sm">
    <div class="mx-auto flex between middle gap-4 w-full">
      {@render brand(title)}
      {@render headerMenu()}
    </div>
  </header>
{/snippet}

{#snippet footer()}
  <footer class="p-4">
    <div class="mx-auto flex between middle gap-4 w-full">
      {@render brand(title)}
    </div>
  </footer>
{/snippet}

{#snippet main()}
  <main class="p-4 space-y-4">
    {@render children()}
  </main>
{/snippet}

<ParaglideJS {i18n}>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    {@render header()}
    {@render main()}
    {@render footer()}
  </div>
</ParaglideJS>
