<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import Storage from "$lib/utilities/storage";

  const storage = new Storage();

  const logout = () => {
    storage.remove("token");
    goto("/");
  };

  onMount(() => {
    logout();
  });
</script>
