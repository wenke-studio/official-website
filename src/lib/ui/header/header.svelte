<script lang="ts">
  import HeaderAction from "./header-action.svelte";
  import HeaderBrand from "./header-brand.svelte";
  import HeaderHamburger from "./header-hamburger.svelte";
  import HeaderNavigation from "./header-navigation.svelte";

  const { title }: { title: string } = $props();
</script>

<header class="sticky top-0 z-10 px-8 py-4 backdrop-blur-sm">
  <div class="mx-auto flex between middle gap-4 w-full">
    <HeaderBrand {title} />
    <HeaderNavigation />
    <div class="block md:hidden">
      <HeaderHamburger />
    </div>
    <div class="hidden md:block">
      <HeaderAction />
    </div>
  </div>
</header>
