<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<slot />

<style>
  :global(body) {
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("../gradient.jpg");
    color: lightgrey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>
