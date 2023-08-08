let url = new Object();
url.fullPath = window.location.pathname;
url.fileName = url.fullPath.substring(url.fullPath.lastIndexOf('/')+1);
url.pathName = url.fileName.substring(0, url.fileName.lastIndexOf('.'));

// CHECK OUT FEATURES IN "SMART-CALCULATOR"!
export const features = [
    {
        'name' : "smart-calculator",
        'link' : "index.php",
        'title': "smart-calculator"
    },{
        'name' : "About",
        'link' : "about.php",
        'title': "About the App"
    },{
        'name' : "Standard",
        'link' : "standard.php",
        'title': "Standard Calculator"
    },{
        'name' : "Scientific",
        'link' : "scientific.php",
        'title': "Scientific Calculator"
    },{
        'name' : "Converter",
        'link' : "converter.php",
        'title': "Converter"
    }
];

// IF THERE'S NO PATHNAME GIVEN, "INDEX.PHP" WILL BE LOADED FIRST.
if (url.fileName === "") {
    url.fileName = "index.php";
    url.pathName = url.fileName.substring(0, url.fileName.lastIndexOf('.'));
}

// CHANGE PAGE TITLE & DOCUMENT HEADERS, ACCORDING TO FILE NAME.
features.forEach(feature => {
    if (url.fileName === feature.link) {
        document.getElementsByTagName('title')[0].innerText = feature.title;
        document.getElementById('title-h1').innerText = feature.title;
    }
});

// GET <HEAD> TO ADD CSS.
const head = document.querySelector('head');
let linkCSS = new Object();
linkCSS.default = document.createElement('link');
linkCSS.local = document.createElement('link'); 

// ADD DEFAULT CSS.
linkCSS.default.rel = "stylesheet";
linkCSS.default.href = "../css/default.css";
head.appendChild(linkCSS.default);

// ADD LOCAL CSS.
linkCSS.local.rel = "stylesheet";
linkCSS.local.href = "../css/" + url.pathName + ".css";
head.appendChild(linkCSS.local);