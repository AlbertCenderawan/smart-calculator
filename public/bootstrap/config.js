// CONFIGURE BOOTSTRAP 5.3.0 CSS&JS SCRIPT TO THE PROJECT.
const bootstrap = [];

bootstrap['css'] = document.getElementById('bootstrap-css');
bootstrap['js'] = document.getElementsByClassName('bootstrap-js');

// SET ATTRIBUTE (MORE THAN 1)
const setMoreAttributes = (elementHTML, json) => {
    Object.entries(json).forEach(entry => {
        let [key, value] = entry;
        elementHTML.setAttribute(key, value);
    });
}

setMoreAttributes(bootstrap['css'], {
    href : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
    rel : "stylesheet",
    integrity : "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
    crossorigin : "anonymous"
});

setMoreAttributes(bootstrap['js'][0], {
    src : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    integrity : "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
    crossorigin : "anonymous"
});
setMoreAttributes(bootstrap['js'][1], {
    src : "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
    integrity : "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
    crossorigin : "anonymous"
});
setMoreAttributes(bootstrap['js'][2], {
    src : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js",
    integrity : "sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS",
    crossorigin : "anonymous"
});