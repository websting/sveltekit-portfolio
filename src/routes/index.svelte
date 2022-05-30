<script>
    let subtitle = 'Full Stack Web Developer'
</script>

<main class="flex-container">
    <h4 class="subtitle">{subtitle}</h4>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');

    :global(body) {
        margin: 0;
        background-color: #2b3e44;
        color: lightgrey;
    }

    .flex-container {
        display: flex;
        width: 100%;
		height: 100vh;
		justify-content: center; /* x-axis */
		align-items: center; /* y-axis */
		flex-direction:column;
        background-image: url('aNTONIO HERRERA.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    h4 {
        color: blueviolet;
        height: 30vh;
        font-family: 'Michroma', sans-serif;
    }

    @media only screen and (max-width: 480px) {
        h4 {
            text-align: center;
            font-size: medium;
        }
    }
</style>