<script lang="ts">
  let email: string;
  let password: string;
</script>

<form class="p-10 sm:px-64">
  <label
    for="input-group-1"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >Your Email</label
  >
  <div class="relative mb-6">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        /><path
          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
        /></svg
      >
    </div>
    <input
      type="text"
      id="input-group-1"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@flowbite.com"
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
      @
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
    on:click|preventDefault={() => {
      console.log(email, password);
      email = "";
      password = "";
    }}
  >
    Login
  </button>
</form>
