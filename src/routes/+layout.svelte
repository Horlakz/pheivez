<script lang="ts">
  import "../app.scss";

  import Header from "$lib/component/baselayout/Header.svelte";
  import Footer from "$lib/component/baselayout/Footer.svelte";
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
