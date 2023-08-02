<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost/smart-calculator/views" id="home">Smart Calculator</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <!-- <a class="nav-link" href="#" id=""></a> -->
            </div>
        </div>
    </div>
</nav>
<script>
    // Apa saja menu di navbar website ini?
    let menuBar = [];
    menuBar.push('standard');
    menuBar.push('scientific');
    menuBar.push('converter');
    menuBar.push('about');
    
    // Buat TAB baru, sesuai menu
    const navbarNav = document.getElementsByClassName("navbar-nav")[0];
    for (let i = 0; i < menuBar.length; i++){
        // Buat elemen baru
        let newLink = document.createElement('a');

        // Modifikasi atribut elemen baru
        newLink.classList.add("nav-link");
        newLink.href = "http://localhost/smart-calculator/views/page/" + menuBar[i] + ".php";
        newLink.id = menuBar[i];
        newLink.innerHTML = menuBar[i].toUpperCase();

        const pathURL = window.location.href;
        let pathName = pathURL.substring(pathURL.lastIndexOf('/')+1);
        pathName = pathName.substring(0, pathName.indexOf('.'));
        
        if (newLink.id === pathName){
            newLink.classList.add("active");
            newLink.ariaCurrent = "page";
        }

        console.log(newLink.href);

        // Eksekusi (di tempat yang tepat)
        navbarNav.appendChild(newLink);
    }
</script>