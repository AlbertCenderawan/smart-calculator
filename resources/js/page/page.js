// Set Title

let pathName = window.location.pathname;
pathName = pathName.substring(pathName.lastIndexOf('/')+1);
pathName = pathName.substring(0, pathName.lastIndexOf('.'));

const menu = [
    'standard', 'scientific', 'converter', 'about'
];

for (let i = 0; i < menu.length; i++){
    if (pathName === menu[i]) {
        document.getElementsByTagName('title')[0].innerText = pathName;
    }
}