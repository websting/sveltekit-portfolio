<script>
  let name = "Antonio Herrera";
  let title = "Full Stack Web Developer";
  let content = `I build websites so you don't have to.`;
</script>

<main class="container">
  <h1 class="slide-left">{name}</h1>
  <h2 class="slide-left">{title}</h2>
  <p class="slide-left">{content}</p>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Tangerine&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center; /* x-axis */
    align-items: center; /* y-axis */
    flex-direction: column;
    line-height: 25px;
  }

  h1 {
    color: rgb(39, 27, 29);
    font-family: "Michroma", sans-serif;
    font-size: xx-large;
    line-height: 25px;
    text-align: center;
  }

  h2 {
    color: #fff;
    font-family: "Michroma", sans-serif;
    font-size: medium;
    opacity: 0;
  }
  p {
    width: 30px;
    color: #fff;
    font-family: "Michroma", sans-serif;
    opacity: 0;
    font-weight: lighter;
  }
  /* slider animation starts here */
  .slide-left {
    animation: slide-left 1s linear forwards;
  }
  @keyframes slide-left {
    0% {
      transform: translate(100px);
      opacity: 0;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }

  h2.slide-left {
    animation-delay: 2s;
  }
  p.slide-left {
    animation-delay: 4s;
  }

  @media only screen and (max-width: 480px) {
    h1,
    h2,
    p {
      text-align: center;
      font-size: medium;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>
