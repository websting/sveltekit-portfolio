<script>
  import { prevent_default } from "svelte/internal";
</script>

<main>
  <div class="container">
    <h3>Contact me</h3>
    <p>
      Your comments are important. All information will remain confidential.
    </p>

    <form method="POST">
      <!-- Name input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          name="name"
          id="form4Example1"
          class="form-control"
        />
        <label class="form-label" for="form4Example1">Name</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input
          type="email"
          name="email"
          id="form4Example2"
          class="form-control"
        />
        <label class="form-label" for="form4Example2">Email address</label>
      </div>

      <!-- Message input -->
      <div class="form-outline mb-4">
        <textarea
          class="form-control"
          name="message"
          id="form4Example3"
          rows="4"
        ></textarea>
        <label class="form-label" for="form4Example3">Message</label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
    </form>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Tinos&display=swap");

  .container {
    margin-top: 25px;
    padding: 35px;
    text-align: justify;
  }
  .form-control{
    background-color: whitesmoke;
  }

  .form-label{
    color: whitesmoke;
    font-weight: 100;
  }

  h3 {
    text-align: center;
    font-family: "Michroma", sans-serif;
    margin-top: 35px;
    padding: 25px;
    color: black;
  }

  p {
    text-align: center;
    color: whitesmoke;
    font-weight:100;
  }
</style>
