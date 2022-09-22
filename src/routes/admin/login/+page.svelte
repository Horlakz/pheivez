<script lang="ts">
  import axios from "axios";

  import Envelope from "$lib/components/svgs/Envelope.svelte";
  import Lock from "$lib/components/svgs/Lock.svelte";

  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import User from "$lib/services/user";
  import Storage from "$lib/utilities/storage";

  const user = new User();
  const storage = new Storage();

  let email: string = "";
  let password: string = "";
  let error: string = "";

  const login = async () => {
    try {
      const res = await user.login(email, password);
      storage.set("token", res.data?.token);
      goto("/admin");
    } catch (e: any) {
      error = e.message;
    }
  };

  onMount(() => {
    if (storage.check("token")) {
      goto("/admin");
    }
  });
</script>

<form class="p-10 sm:px-64">
  <label
    for="email"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >Your Email</label
  >
  <div class="relative mb-6">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    >
      <Envelope />
    </div>
    <input
      type="text"
      id="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="admin@pheivez.com"
      bind:value={email}
    />
  </div>
  <label
    for="website-admin"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >Password</label
  >
  <div class="flex">
    <span
      class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
    >
      <Lock />
    </span>
    <input
      type="password"
      id="website-admin"
      class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="*******"
      bind:value={password}
    />
  </div>

  <button
    class="w-full mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 default-transition"
    disabled={!email || !password}
    on:click|preventDefault={() => {
      login();
    }}>Login</button
  >
</form>
