<script></script>

<main class="content">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>About Me</h3>
                    <p class="paragraph">Web Development for me started a few years back when I wanted to share pictures with friends and family. Facebok, Instagram and all of today's social  media was not a thing for sharing online just yet.  It was around this time I started experimenting with HTML, CSS, and JavaScript. I made a photo album and since then building websites became an obcession. Seeing the front-end result of my work online, and being able to share it with the entire world was a rewarding experience.</p>
                </div>
            </div><!--row-1 ends-->

            <div class="row">
                <div class="col-sm-6">
                    <img src="portrait.JPG" alt="portrait" width="70%"/>
                </div>
                <div class="col-sm-6">
                    
                    <p class="paragraph">Today my interests have changed a little and so has the Web Developing world.  I have come to realise that knowing the server side of web development is also exiting.  I like how different technologies on the back-end of a website can dinamycally update and display information.</p>
                   
                    <p class="paragraph">Hi, my name is Antonio Herrera. I'm a self thought web developer.  My mode is keep it simple. The web is already out there, lets make it better !</p>
                </div>
            </div><!--row2 ends-->
            
            <div class="row">
                <h5>Tools of the trade</h5>
                <div class="col-sm-12">
                    <div class="icons">
                        <i class="fa-brands fa-html5 fa-2x" style="color: orange;"></i>
                        <i class="fa-brands fa-css3-alt fa-2x" style="color: DodgerBlue;"></i>
                        <i class="fa-brands fa-js fa-2x" style="color: orange;"></i>
                        <i class="fa-brands fa-python fa-2x" style="color: SteelBlue;"></i>
                        <i class="fa-brands fa-node-js fa-2x" style="color: green;"></i>
                        <i class="fa-brands fa-bootstrap fa-2x" style="color: magenta;"></i>
                        <i class="fa-brands fa-vuejs fa-2x" style="color: green;"></i>
                        <i class="fa-brands fa-github fa-2x" style="color: black;"></i>
                    </div>
                </div>
            </div>
        </div>  
</main>
 
<style>
    @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap');
    
    main{
        display: flex;
        width: 100%;
		justify-content: center; /* x-axis */
		align-items: center; /* y-axis */
		flex-direction:column;
    }
    .container {
        margin-top: 25px;
        padding: 35px;
        text-align:justify;
        
    }

    h3, h5 {
        
        color: black;
        text-align: center;
        font-family: 'Michroma', sans-serif;
    }
    h3 {
        margin-top: 20px;
    }

    h5 {
        margin-top: 25px;
        padding: 10px;
        word-spacing: 4px;
    }

    .paragraph {
        padding: 10px;
        display: block;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Tinos', serif;
        font-size: medium;
        color: #fff;
        font-weight: lighter;

    }

    img {
        padding: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 25px;
        opacity: 0.7;
    }

    img:hover {
            opacity: 1.0;
    }

    .icons {
        padding:  10px;
        text-align: center;
        word-spacing: 20px;
    }
</style>