export const calculator = {

    results : {
        header : true,
        class : "output",
        elements : {
            'calculation' : 0,
            'result' : 0
        }
    },
    number : {
        header : false,
        class : 'number',
        elements : {
            "one":1,
            "two":2,
            "three":3,
            "four":4,
            "five":5,
            "six":6,
            "seven":7,
            "eight":8,
            "nine":9,
            "zero":0,
            "double-zero":"00",
            "comma":"."
        }
    },
    unary : {
        header : false,
        class : "unary",
        elements : {
            'AC':"AC",
            'BACK':"BSPC",
            '+/-':'+/-',
            '1/x':'1/x',
            '%':"%",
            'power2' : "x<sup>" + 2 + "</sup>",
            'power3' : "x<sup>" + 3 + "</sup>",
            'ten-power' : "10<sup>" + 'x' + "</sup>",
            'square-root': "&#8730;"+"x",
            'cube-root': "&#8731;"+"x"
        }
    },
    binary : {
        header : false,
        class : "binary",
        elements : {
            'add':"+",
            'subtract':"-",
            'multiply':"x",
            'divide':"&divide"
        }
    },
    equal : {
        header : false,
        class : "equal",
        elements : {
            'equal' : "="
        }
    }
}

let components = {};
Object.keys(calculator).forEach(key => {
    components[key] = {};
});

const setMoreAttributes = (elementHTML, json) => {
    Object.entries(json).forEach(entry => {
        let [key, value] = entry;
        elementHTML.setAttribute(key, value);
    });
}

const CreateEachElements = (input) => {

    // components[input][key]
    // components[results][calculation] = document.createElement('th / td')

    // CREATE EACH ELEMENTS FROM CALCULATOR
    for (const [key, value] of Object.entries(calculator[input].elements)){
        
        // CHECK INPUT. IF HEADER == TRUE, PROCEED.
        components[input][key] = (calculator[input].header === true)? document.createElement('th') : document.createElement('td');

        // SET ATTRIBUTES
        setMoreAttributes(components[input][key], {
            class : calculator[input].class,
            id : key
        });

        components[input][key].innerHTML = value;

        // APPEND TO ITS LOCATION (<TR>).
        document.getElementById('tr-' + input).appendChild(components[input][key]);
    }
}

const tr = {};
Object.entries(calculator).forEach(entry => {
    const [key, value] = entry;
    let tagLocation = "";
    
    // CREATE NEW <TR> TAG.
    tr[key] = document.createElement('tr');
    tr[key].id = "tr-" + key;
    tagLocation = (value.header === true)? "thead" : "tbody";

    document.body.querySelector(tagLocation).appendChild(tr[key]);
});

// CREATE EVERY BUTTONS, ACCORDING TO "CALCULATOR" JSON.
Object.keys(calculator).forEach(key => {
    CreateEachElements(key);
});

console.log(components);