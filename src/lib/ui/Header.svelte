<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import { IconSettings, IconUser } from "@tabler/icons-svelte";
  import { readable } from "svelte/store";

  import { Avatar } from "@skeletonlabs/skeleton-svelte";

  export const title = readable("Wenke Studio");
</script>

<AppBar
  classes="sticky top-0 z-10 backdrop-blur-sm"
  background="transparent"
  trailClasses="flex middle gap-2"
>
  {#snippet lead()}
    <h3>{$title}</h3>
  {/snippet}

  {#snippet trail()}
    <button type="button" class="btn-icon">
      <IconSettings />
    </button>
    <button type="button">
      <Avatar size="md" name="user">
        <IconUser />
      </Avatar>
    </button>
  {/snippet}

  <ul class="inline-flex gap-2">
    <li>
      <a href="/">Product</a>
    </li>
    <li>
      <a href="/">Solution</a>
    </li>
  </ul>
</AppBar>
