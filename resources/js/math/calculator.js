export const AddNumber = (object, numObject) => {
    if (parseInt(object.innerText) == "0") object.innerText = numObject.innerText;
    else object.innerText += numObject.innerText;
}

export const AddNumberByKey = (object, e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57){
        if (object.innerText === "0") object.innerText = e.key;
        else object.innerText += e.key;
    }
}

export const AddDoubleZero = (object, numObject) => {
    if (object.innerText != "0") object.innerText += numObject.innerText;
}

export const AddComma = (object, numObject) => {
    object.innerText += numObject.innerText;
}

export const ResetToZero = (object) => {
    object.innerText = 0;
}

export const BackSpace = (object) => {
    if (Includes(object, "Infinity")){ ResetToZero(object); return; }
    if (Includes(object, "Error")){ ResetToZero(object); return; }

    if (object.innerText.length == 1){ ResetToZero(object); return; }
    if (object.innerText === "-"){ ResetToZero(object); return; }

    object.innerText = object.innerText.slice(0,-1);
};

export const Includes = function(object, prompt){
    return object.innerText.includes(prompt);
}

export const IsMinus = function(object){
    return object.innerText.charAt(0) === "-";
}

export const PlusMinus = (object) => {
    if (parseInt(object.innerText) === 0) return;

    if (object.innerText.charAt(0) !== "-") 
        object.innerText = "-".concat(object.innerText);
    else object.innerText = object.innerText.slice(1);
}

export const Inverse = (object) => {
    object.innerText = 1 / object.innerText;
}

export const Percent = function(object){
    if (Includes(object, "Infinity")) object.innerText = "Error";
    else object.innerText = object.innerText / 100;
}

export const Power = function(object, base, exponent){
    object.innerText = Math.pow(base, exponent);
}

export const SquareRoot = (object) => {
    object.innerText = Math.sqrt(object.innerText);
}

export const CubeRoot = (object) => {
    object.innerText = Math.cbrt(object.innerText);
}

export const PutOperator = (object, opObject) => {
    object.innerText = object.innerText.concat(opObject.innerText);
}

export const IsComma = (object) => {
    return object.innerText === "." || object.innerText === ",";
}

export const IsInteger = (object) => {
    return Number.isInteger(parseInt(object.innerText));
}