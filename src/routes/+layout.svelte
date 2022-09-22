<script lang="ts">
  import "../app.scss";

  import Header from "$lib/components/baselayout/Header.svelte";
  import Footer from "$lib/components/baselayout/Footer.svelte";
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
