<script lang="ts">
  import FooterBrand from "./footer-brand.svelte";

  const { title }: { title: string } = $props();
</script>

<footer class="p-4">
  <div class="mx-auto flex between middle gap-4 w-full">
    <FooterBrand {title} />
  </div>
</footer>
