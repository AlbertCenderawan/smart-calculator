<!-- NAVIGATION BAR (SMART-CALCULATOR) -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" id="navbar-brand-anchor"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" id="navbar-nav-list">
      </div>
    </div>
  </div>
</nav>

<script>
    // SET ATTRIBUTE (MORE THAN 1)
    const setMoreAttributes = (elementHTML, json) => {
        Object.entries(json).forEach(entry => {
            let [key, value] = entry;
            elementHTML.setAttribute(key, value);
        });}
</script>

<script>
    const webLink = "http://localhost/smart-calculator/resources/views/";
    const features = [
        {'name' : "smart-calculator", 'link' : "index.php"},
        {'name' : "About",'link' : "about.php"},
        {'name' : "Standard",'link' : "standard.php"},
        {'name' : "Scientific",'link' : "scientific.php"},
        {'name' : "Converter",'link' : "converter.php"},
    ];

    // GET EACH ELEMENT.
    const navbarBrandAnchor = document.getElementById("navbar-brand-anchor");
    const navbarNavList = document.getElementById("navbar-nav-list");
    
    // CHANGE EACH ELEMENT'S ATTRIBUTE.
    navbarBrandAnchor.href = webLink + features[0].link;
    navbarBrandAnchor.innerText = features[0].name;

    // CHANGE EACH ELEMENT'S ATTRIBUTE & CREATE NEW HYPERLINKS.
    features.forEach(feature => {

        if (feature.link === "index.php")
            return;
        
        // CREATE NEW HYPERLINK
        let navLink = document.createElement("a");
        setMoreAttributes(navLink, {
            href      : webLink + feature.link,
            target    : "_self",
            class     : "nav-link",
            id        : "nav-link-" + feature.link.substring(0, feature.link.indexOf('.'))
        });
        navLink.innerText = feature.name;
        navbarNavList.appendChild(navLink);
    });
</script>