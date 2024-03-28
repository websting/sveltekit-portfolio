<script>
    const home = '/'
    const about = '/about'
    const work = '/work'
    const contact = '/contact'
    const blog = 'https://aherrerablog.netlify.app/'
</script>

<main class="container">
    <div id="side-nav" class="sidenav">
        <a href={home} id="home">Home</a>
        <a href={about} id='about'>About</a>
        <a href={work} id="work">Work</a>
        <a href={contact} id="contact">Contact</a>
        <a href={blog} id="blog" target="blank">Blog</a>
    </div> 
</main>

<style>
    #side-nav a {
        margin-top: 30px;
        position: absolute;
        left: -80px;
        transition: 0.3s;
        padding: 15px;
        width: 100px;
        text-decoration: none;
        font-size: 15px;
        color: white;
        border-radius: 0 5px 5px 0;
    }

    #side-nav a:hover {
        left: 0;
    }

    #home {
        top: 20px;
        background-color: #04AA6D;
}

    #about {
            top: 80px;
            background-color: #2196F3;
    }

    #work {
            top: 140px;
            background-color: #f44336;
    }

    #contact {
            top: 200px;
            background-color: #555;
    }

    #blog {
            top: 260px;
            background-color: #FF8C00;
    }

    @media only screen and (max-width: 768px){
        #side-nav a {
            padding: 10px;
            font-size: small;
            width: 90px;
        }
    }
    
</style>