<script lang="ts">
  import { page } from "$app/stores";

  import Storage from "$lib/utilities/storage";

  const storage = new Storage();

  const checkToken = storage.check("token");
</script>

<header class="flex justify-between px-10 py-4 bg-gray-50 border-b">
  <a href="/"><h1 class="text-gray-700 font-semibold text-xl">Pheivez</h1></a>

  <nav data-sveltekit-prefetch>
    <ul class="flex gap-2">
      <li class:active={$page.url.pathname === "/"}>
        <a href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === "/about"}>
        <a href="/about">About</a>
      </li>
      {#if checkToken}
        <li class:active={$page.url.pathname === "/logout"}>
          <a href="/logout">Logout</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<style lang="scss">
  .active {
    @apply text-gray-700 font-semibold;
  }
</style>
