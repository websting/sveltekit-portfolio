<script>
  const handleSubmit = async (data) => {
    const formData = new FormData(data.currentTarget);

    const res = await fetch("contact.json", {
      method: "POST",
      body: formData,
    });
  };
</script>

<main>
    <div class="container">
      <h3>Where to find me</h3>
      <div class="row">
        <div class="col-sm-6">
          <img src="map.png" alt="..."/>
        </div><!--col-1 ends-->

        <div class="col">
          <div class="paragraph">
          <p>In Milton Ontario, Canada</p>
          <div class="form">
          <p class="icons">
            <a href="mailto:herrera.antonio1@outlook.com"><i class="fa-solid fa-envelope fa-2x"></i></a>
            <a href="https://www.instagram.com"><i class="fa-brands fa-instagram fa-2x" style="color: magenta;"></i></a>
          </p>
          <p>Or on the web :</p>
          </div>

          <form class="form" on:submit={handleSubmit}> <!--prevent from refreshing-->
            <div class="row">
              <div class="col">
                <input type="text" name="name" class="form-control" placeholder="First Name">
              </div>
              <div class="col">
                <input type="text" name="last" class="form-control" placeholder="Last Name">
              </div>
              <div class="row">
              <div class="col">
                <input type="email" name="email" class="form-control" placeholder="Email">
              </div>
              </div>
              <div class="row">
                <div class="col">
                <textarea name="message" class="form-control" placeholder="How can I help you?" />
              </div>
              </div>
              <input type="submit" class="btn btn-primary btn-sm" />
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');

  .container {
        margin-top: 25px;
        padding: 35px;
        text-align:justify;
    }

  img {
    width: 100%;
    margin-top: 50px;
    padding: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
  }

  h3 {
        text-align: center;
        font-family: 'Michroma', sans-serif;
        margin-top: 35px;
        padding: 25px;
        color: blueviolet;
    }
  
  .row {
    padding: 10px;
  }
  .col {
    padding: 5px;
  }

  .btn {
    margin-left: 10px;
    width: auto;
  }
  
  p {
    margin-left: 10px;
    font-family: 'Aclonica', sans-serif;
  }

.paragraph {
  margin-top: 40px;
}

.icons {
  word-spacing: 20px;
}

</style>