<script>
    import Nav from '../components/nav.svelte'
</script>

<Nav/>
<slot></slot>

<style>
    :global(body){
        background-image: url"('../gradient.jpg')";
        color: lightgrey;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        background-attachment: fixed;
    }
</style>
