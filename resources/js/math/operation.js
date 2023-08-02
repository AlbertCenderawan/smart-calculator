const stack = {'operator':[],'operand':[],'infix':[],'temp':"",'postfix':[], 'postfix_operand':[]};
const operator = [
    ['+', '-'],
    ['x', '*', '/', '÷'],
    ['=']
]

// operator = {key=i : value=input}

const IsComma = (char) => {return char === "." || char === ",";}
const IsInteger = (char) => {return Number.isInteger(parseInt(char));}
const IsFloat = (element) => {return parseFloat(element) !== NaN;}
const IsOperator = (element) => {
    for (let i = 0; i < operator.length; i++){
        for (let j = 0; j < operator[i].length; j++){
            if (element === operator[i][j]) return true;
        }
    }
    return false;
}

const Object_IsEmpty = (object) => {return Object.keys(object).length == 0}

// CALCULATE NOW!
export const Calculate = (object, resultObject) => {

    for (let char = 0; char < object.innerText.length; char++){

        console.log(object.innerText[char]);
        AddToStack(object.innerText[char]);

        // Infix
        stack.infix.push(object.innerText[char]);
    }
    
    DoArithmetic();
    
    console.log(stack);
}

// CHECK ALL CHARACTERS, WHETHER IS OPERAND OR NOT.
const AddToStack = (input) => {
    
    
    // OPERAND
    if (IsInteger(input) || IsComma(input)){
        stack.temp = stack.temp.concat(input);
        return;
    }

    // -5 + -2 (STILL OPERAND)
    if (input == "-" && stack.temp.length == 0){
        stack.temp = stack.temp.concat(input); return;
    }

    const hierarchy = {
        'topOperator':0,
        'input':0,
    };

    // IF THIS IS OPERATOR? LET'S SEE
    for (let i = 0; i < operator.length; i++){
        for (let j = 0; j < operator[i].length; j++){
            if (input === operator[i][j] && input !== "="){

                // Temp = "5.3" => ""
                if (stack.temp.length > 0){
                    stack.postfix.push(stack.temp);
                    stack.operand.push(stack.temp);
                    stack.temp = "";
                }

                hierarchy['input'] = i;

                // IF THIS IS FIRST (1st) OPERATOR
                if (Object_IsEmpty(stack.operator)){
                    hierarchy['topOperator'] = i;
                    stack.operator.push(input); break;
                }

                // IF THIS IS OTHER (2nd, 3rd, 4th, ...) OPERATOR
                while (stack.operator.length > 0 && (hierarchy['topOperator'] >= hierarchy['input'])){
                    stack.postfix.push(stack.operator[stack.operator.length - 1]);
                    stack.operator.pop();
                }
                stack.operator.push(input);
                hierarchy['topOperator'] = hierarchy['input'];
            }
        }
    }

    // IF OPERATOR == EQUAL
    if (input === "="){

        // CHECK TEMP. IF THERE'S A REMAIN, PUSH!
        if (stack.temp != ""){
            stack.postfix.push(stack.temp);
            stack.operand.push(stack.temp);
            stack.temp = "";
        }

        // CHECK OPERATOR STACK. IF THERE'S STILL A BIT, PUSH!
        while (stack.operator.length > 0){
            stack.postfix.push(stack.operator[stack.operator.length - 1]);
            stack.operator.pop();
        }
    }
}

const DoArithmetic = () => {
    // https://youtu.be/UKuIw8cKKsc
    
    // LET'S DO ARITHMETIC (WITH POSTFIXES)
    for (let element = 0; element < stack.postfix.length; element++){
        
        // IF FOUND OPERATOR, PLEASE CHECK 2 OPERAND BEHIND.
    }
}