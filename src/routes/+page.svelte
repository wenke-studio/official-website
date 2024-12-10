<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { i18n } from "$lib/i18n";
  import * as m from "$lib/paraglide/messages.js";
  import type { AvailableLanguageTag } from "$lib/paraglide/runtime";

  const switchToLanguage = (newLanguage: AvailableLanguageTag) => {
    const canonicalPath = i18n.route($page.url.pathname);
    const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
    goto(localisedPath);
  };

  const welcome = "hello world";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

{#snippet hero()}
  <section class="h-[512px] bg-sky-200">Hero</section>
{/snippet}

{#snippet typography()}
  <section class="h-[512px] bg-pink-200">
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <p>p</p>
    <span>span</span>
    <blockquote>blockquote</blockquote>
    <a href="/">a</a>
    <pre>pre</pre>
    <code>code</code>
    <kbd>kbd</kbd>
    <del>del</del>
    <ins>ins</ins>
  </section>
{/snippet}

{#snippet i18nToogle()}
  <section class="h-[512px] bg-green-200">
    <p>{m.hello_world({ name: "Wenke" })}</p>

    <div class="flex gap-2 middel max-w-xs">
      <button
        type="button"
        class="border border-blue-600 rounded px-2 py-1 active:scale-95 w-full"
        onclick={() => switchToLanguage("en")}
      >
        en
      </button>
      <button
        type="button"
        class="border border-blue-600 rounded px-2 py-1 active:scale-95 w-full"
        onclick={() => switchToLanguage("zh-tw")}
      >
        zh-tw
      </button>
    </div>
  </section>
{/snippet}

<div>
  {@render hero()}
  {@render typography()}
  {@render i18nToogle()}
</div>
