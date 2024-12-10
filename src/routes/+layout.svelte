<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { Footer, Header } from "$lib/ui";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import "../app.css";

  let { children } = $props();

  let title: string = "Wenke Studio";
</script>

<ParaglideJS {i18n}>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <Header {title} />
    <main class="p-4 space-y-4">
      {@render children()}
    </main>
    <Footer {title} />
  </div>
</ParaglideJS>
