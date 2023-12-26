<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<slot />

<style>
  :global(body) {
    color: lightgrey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>
