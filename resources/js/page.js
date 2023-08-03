// GET WEBPAGE PATH NAME
let pathName = window.location.pathname;
pathName = pathName.substring(pathName.lastIndexOf('/')+1);
pathName = pathName.substring(0, pathName.lastIndexOf('.'));

const features = {
    'standard': {'title': "Standard Calculator"},
    'scientific': {'title': "Scientific Calculator"},
    'converter': {'title': "Converter"},
    'about': {'title': "About the App"},
}

Object.entries(features).forEach(entry => {
    const [key, value] = entry;
    
    if (pathName === key) {
        
        // lowercase --> PascalCase
        let FirstChar = key.substring(0,1);
        let PascalCase = FirstChar.toUpperCase() + key.substring(1);
        document.getElementsByTagName('title')[0].innerText = PascalCase;
        document.getElementById('title-h1').innerText = value.title;
    }
});