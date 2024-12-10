<script lang="ts">
  import { IconStack } from "@tabler/icons-svelte";

  const { title }: { title: string } = $props();
</script>

<div class="flex items-center gap-2">
  <IconStack />
  <h3>{title}</h3>
</div>
