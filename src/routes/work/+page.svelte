<script>
	import { images } from '../../components/imgData';
	import { categories } from '../../components/imgData'
	
	import ButtonContainer from '../../components/ButtonContainer.svelte';
	import Gallery from '../../components/Gallery.svelte';
	
	let selected = "all";
	
	// @ts-ignore
	const filterSelection = (e) => selected = e.target.dataset.name;

</script>

<main>
	<h3>My Work</h3>
	<ButtonContainer>
		{#each categories as category}
			<button class:active={selected === category} 
							class="btn" 
							data-name={category} 
							on:click={filterSelection}>
				{category}
			</button>
		{/each}
	</ButtonContainer>

	<!-- Portfolio Gallery Grid -->
	<Gallery>
		{#each images as {name, url, keyword, descr, link}}	
			{#if selected === "all"}
				<div class="show column">
					<div class="content">
						<img src={url} alt={name} style="width:100%">
						<h5>{name}</h5>
						<p class="descr">{descr} <a href={link} target="new">Live-Demo</a></p>
					</div>
				</div>

			{:else}
				<div class:show={selected === keyword} class="column">
					<div class="content">
						<img src={url} alt={name} style="width:100%">
						<h5>{name}</h5>
						<p>{descr} <a href={link} target="new">Live-Demo</a></p>
					</div>
				</div>
			{/if}
		{/each}
	</Gallery>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap');

/* Center website */
main {
  margin-top: 25px;
  padding: 35px;
  max-width: 100vw;
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

}
	
h3 {
	color: black;
  text-align: center;
  font-family: 'Michroma', sans-serif;
	margin-top: 20px;
  margin-bottom: 25px;
}

h5 {
  text-align: center;
  font-family: 'Michroma', sans-serif;
  font-size: small;
  margin-top: 5px;
  padding: 2px;
  color:indigo;
}
	
p {
	padding-left: 10px;
  margin: 3px;
	position: relative;
  color: grey;
  font-family: 'Tinos', serif;
  text-align:center;
}

p a{
	text-decoration:none;
}


/* Create three equal columns */
.column {
  width: 33.33%;
	display: none;
	justify-content: center;
	margin: 10px 0;
}


/* Content */
.content {
  background-color: white;
  border-radius: 5px;
	margin: 15px;
  	/*padding: 10px;*/
	/*width: 25vw;*/
	box-shadow: 1px 1px 5px black;
}

/* The "show" class is added to the filtered elements */
.show {
	display: flex;
}

/* Style the buttons */
.btn {
	width: 150px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1.2rem;
	letter-spacing: 1px;
	border: none;
	outline: none;
	margin: 5px;
	padding: 14px 16px 12px;
	background-color: rgb(228, 66, 66);
	box-shadow: 1px 1px 5px black;
	color: white;
	
	
	cursor: pointer;
	transition: .1s ease-in-out;
}

.btn:hover {
  background-color: teal;
}


	/* Add a dark background color to the active button */
.btn:active,
.active {
	background-color: #FF8C00;
	color: white;
	font-weight: bold;
}
	/* For mobile phones: when screen gets at 768px or less
	   width should be 100% */
@media only screen and (max-width: 768px) {
  
  .column {
    width: 100%;
  }

  .content {
	  width: 100vw;
	  
  }

  .btn {
	  margin-left: 30px;
	  width: 100%;
	  text-transform:uppercase;
	   font-weight: 200;
	   font-size:  x-small;
	   margin: 3px;
		padding: 7px 8px 6px;
		border-radius: 50%;
  }

  img {
	  width:max-content;
  }

}
</style>