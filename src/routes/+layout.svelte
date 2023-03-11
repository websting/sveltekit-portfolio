<script>
    import Nav from '../components/nav.svelte'
</script>

<Nav/>
<slot></slot>

<style>
    :global(body){
        background-image: url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
        color: lightgrey;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        background-attachment: fixed;
    }
</style>
