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

<section>
  <h1>
    <span class="welcome"> {welcome} </span>

    <div>{m.hello_world({ name: "Wenke" })}</div>

    <button onclick={() => switchToLanguage("en")}>en</button>
    <button onclick={() => switchToLanguage("zh-tw")}>zh-tw</button>
  </h1>
</section>
