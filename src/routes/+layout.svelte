<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<slot />

<style>
  :global(body) {
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(../gradient.jpg);
    color: lightgrey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>
