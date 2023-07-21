const stack = {'operator':[],'operand':[],'infix':"",'temp':"",'postfix':[], 'postfix_operand':[]};
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

// CHECK ALL CHARACTERS, WHETHER IS OPERAND OR NOT.
const AddToStack = (input) => {
    
    
    // OPERAND
    if (IsInteger(input) || IsComma(input)){
        stack.temp = stack.temp.concat(input);
        return;
    }

    // -5 + -2
    if (input == "-" && stack.temp.length == 0){
        stack.temp = stack.temp.concat(input); return;
    }

    const hierarchy = {
        'topOperator':0,
        'input':0,
    };

    // CONNECT OPERATOR WITH HIERARCHY
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

                if (Object_IsEmpty(stack.operator)){
                    hierarchy['topOperator'] = i;
                    stack.operator.push(input); break;
                }

                while (stack.operator.length > 0 && (hierarchy['topOperator'] >= hierarchy['input'])){
                    stack.postfix.push(stack.operator[stack.operator.length - 1]);
                    stack.operator.pop();
                }
                stack.operator.push(input);
                hierarchy['topOperator'] = hierarchy['input'];
            }
        }
    }

    if (input === "="){
        if (stack.temp != ""){
            stack.postfix.push(stack.temp);
            stack.operand.push(stack.temp);
            stack.temp = "";
        }

        while (stack.operator.length > 0){
            stack.postfix.push(stack.operator[stack.operator.length - 1]);
            stack.operator.pop();
        }
    }
}

export const Calculate = (object, resultObject) => {

    for (let char = 0; char < object.innerText.length; char++){

        AddToStack(object.innerText[char]);

        // Infix
        stack.infix = stack.infix.concat(object.innerText[char]);
    }
    
    for (let index = 0; index < stack.postfix.length; index++){
        let e = stack.postfix[index];

        // IF OPERAND
        if (!IsOperator(e)){
            stack.postfix_operand.push(e); continue;
        }

        // IF OPERATOR
        const 
    }
    
    console.log(stack);
}