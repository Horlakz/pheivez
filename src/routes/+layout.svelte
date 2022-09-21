<script lang="ts">
  import "../app.scss";

  import Header from "$lib/baselayout/Header.svelte";
  import Footer from "$lib/baselayout/Footer.svelte";
</script>

<svelte:head>
  <title>Pheivez Arts</title>
  <meta name="description" content="Art Gallery" />
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />
