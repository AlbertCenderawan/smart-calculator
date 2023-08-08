export const calculator = {

    number : {
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
    unaryX : {
        class : "unary",
        elements : {
            'AC':"AC",
            'BACK':"BSPC",
            '+/-':'+/-',
            '1/x':'1/x',
            '%':"%",
            'power2' : "x"+"2".sup(),
            'power3' : "x"+"3".sup(),
            'ten-power' : "10"+"x".sup(),
            'square-root': "&#8730;"+"x",
            'cube-root': "&#8731;"+"x"
        }
    },
    binary : {
        class : "binary",
        elements : {
            'add':"+",
            'subtract':"-",
            'multiply':"x",
            'divide':"&#xF7"
        }
    },
    equal : {
        class : "equal",
        elements : {
            'equal' : "="
        }
    },
    results : {
        class : "output",
        elements : {
            'calculation' : 0,
            'result' : 0,
        }
    }
}

let components = [];
Object.keys(calculator).forEach(key => { components[key] = []; });

for (let e = 0; e < Object.entries(calculator.results.elements).length; e++){
    components.results[e] = document.createElement('th');
    components.results[e].classList.add(calculator.results.class);
    
    components.results[e].colspan = 12;
    
    components.results[e].id = Object.keys(calculator.results.elements)[e];
    components.results[e].innerText = Object.values(calculator.results.elements)[e];

    document.getElementById('tr-results').appendChild(components.results[e]);
}