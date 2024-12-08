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
  </h1>

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

  <div>
    <p>{m.hello_world({ name: "Wenke" })}</p>
    <button onclick={() => switchToLanguage("en")}>en</button>
    <button onclick={() => switchToLanguage("zh-tw")}>zh-tw</button>
  </div>
</section>
