// ARRAY AS STACK.
const stack = {
    'operator' : [],
    'operand' : [],
    'infix' : [],
    'temp' : "",
    'postfix' : [],
    'list_of' : {
        'operand' : [],
        'operator' : [],
    },
    'temp_operand' : []
};

// OPERATOR & ITS "HIERARCHY"
const operator = [
    ['+','-'],
    ['x', '*', '/', '÷'],
    ['=']
];

// BINARY OPERATOR & ITS "OPERATIONS"
const operations = {
    '+': function (o1, o2) {return o1 + o2},
    '-': function (o1, o2) {return o1 - o2},
    'x': function (o1, o2) {return o1 * o2},
    '*': function (o1, o2) {return o1 * o2},
    '/': function (o1, o2) {return o1 / o2},
    '÷': function (o1, o2) {return o1 / o2}
};

// IF COMMA, IF INTEGER, IF EMPTY
const IsComma = (char) => {return char === "." || char === ",";}
const IsInteger = (char) => {return Number.isInteger(parseInt(char));}
const IsEmpty = (object) => {return Object.keys(object).length == 0}

// IF THE OPERATOR IS IN THE LIST, RETURN TRUE.
const IsOperator = (element) => {
    for (let i = 0; i < operator.length; i++){
        for (let j = 0; j < operator[i].length; j++){
            if (element === operator[i][j]) return true;
        }
    }
    return false;
};

// CALCULATE NOW!
export const Calculate = (object) => {

    for (let char = 0; char < object.innerText.length; char++){
        AddToStack(object.innerText[char]);
    }
    
    return ConvertStackIntoOperation();
}

// ADD INPUT TO OTHER STACKS
const AddToOtherStacks = (type, input) => {
    
    if (type == "operand") stack.list_of.operand.push(input);
    else if (type == "operator") stack.list_of.operator.push(input);

    stack.infix.push(input);
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
        stack.temp = stack.temp.concat(input);
        return;
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

                    AddToOtherStacks(stack.temp);
                    stack.temp = "";
                }

                // SET HIERARCHY
                hierarchy['input'] = i;
                AddToOtherStacks(stack.temp);

                // IF THIS IS FIRST (1st) OPERATOR
                if (IsEmpty(stack.operator)){
                    hierarchy['topOperator'] = i;
                    stack.operator.push(input);
                    break;
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
        stack.infix.push(input);

        // CHECK TEMP. IF THERE'S A REMAIN OPERAND, PUSH!
        if (stack.temp != ""){
            stack.postfix.push(stack.temp);
            stack.list_of.operand.push(stack.temp);
            stack.temp = "";
        }

        // CHECK OPERATOR STACK. IF THERE'S STILL A BIT, PUSH!
        while (stack.operator.length > 0){
            stack.postfix.push(stack.operator[stack.operator.length - 1]);
            stack.operator.pop();
        }
    }
}

// APPLY MATH METHODS TO PRODUCE RESULT.
const ApplyMath = (operand_01, operator, operand_02) => {
    
    let result = 0;
    Object.keys(operations).forEach(key => {
        if (key === operator)
            result = operations[key](parseFloat(operand_01), parseFloat(operand_02));
    });

    return result;
}

// CONVERT POSTFIX STACK TO "ARITHMETIC" EXPRESSION EVALUATION
const ConvertStackIntoOperation = () => {

    for (let i = 0; i < stack.postfix.length; i++)
    {
        // IF THIS IS OPERAND?
        if (!IsOperator(stack.postfix[i])){
            stack.temp_operand.push(stack.postfix[i]);
            continue;
        }

        // IF THIS IS OPERATOR, DO ARITHMETIC PROCESS!
        let operand_end = stack.temp_operand.pop();
        let operand_begin = stack.temp_operand.pop();
        stack.temp_operand.push(ApplyMath(operand_begin, stack.postfix[i], operand_end));
    }

    // BECAUSE TEMP_OPERAND HAS ONLY 1 VALUE (= RESULT), POP IT!
    return stack.temp_operand.pop();
};