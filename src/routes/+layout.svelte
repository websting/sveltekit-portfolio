<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<slot />

<style>
  :global(body) {
    background: linear-gradient(45deg,#d2001a,#6e62c5,#b3712a,#3be0ba);
    animation: color 12s ease-in-out infinite;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
 @keyframes color{
    0%{
      background-position: 0 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    100%{
      background-position: 0 50%;
    }
  }
</style>
