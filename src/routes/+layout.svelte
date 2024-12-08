<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import "../app.css";

  let { children } = $props();

  $effect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<ParaglideJS {i18n}>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <!-- Header -->
    <header class="sticky top-0 z-10 backdrop-blur-sm p-4">(header)</header>
    <!-- Main -->
    <main class="p-4 space-y-4">
      {@render children()}

      <!-- debug code -->
      <div class="flex between debug">
        <p class="h-[512px] p-4 debug">Paragraph 1</p>
        <p class="h-[512px] p-4 debug">Paragraph 2</p>
        <p class="h-[512px] p-4 debug">Paragraph 3</p>
      </div>
      <div class="h-[512px]">second block</div>
    </main>
    <!-- Footer -->
    <footer class="p-4">(footer)</footer>
  </div>
</ParaglideJS>
