// Set Title
console.log("Hello from Page.js");

let pathName = window.location.pathname;
pathName = pathName.substring(pathName.lastIndexOf('/')+1);
pathName = pathName.substring(0, pathName.lastIndexOf('.'));

const menu = ['standard', 'scientific', 'converter', 'about']

for (let i = 0; i < menu.length; i++){
    if (pathName === menu[i]) {
        
        // lowercase --> Titlecase
        alert(pathName);

        document.getElementsByTagName('title')[0].innerText = menu[i];
        document.getElementById('title-h1').innerText = menu[i];
    }
}