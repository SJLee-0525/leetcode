/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const postfix = [];
    const operatorStack = [];

    const precedence = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
    };

    function processOperator(operator) {
        while (operatorStack.length 
        && precedence[operatorStack[operatorStack.length - 1]] >= precedence[operator]) {
            postfix.push(operatorStack.pop());
        };

        operatorStack.push(operator);
    }

    let number = '';

    for (const char of s) {
        if (char >= '0' && char <= '9') number += char;
        else if (char === ' ') continue;
        else {
            postfix.push(Number(number));
            number = '';

            processOperator(char);
        };
    };

    if (number !== '') postfix.push(Number(number));
    while (operatorStack.length) postfix.push(operatorStack.pop());

    const stack = [];

    function calculateOperator(operator) {
        const b = stack.pop();
        const a = stack.pop();

        if (operator === '+') stack.push(a + b);
        else if (operator === '-') stack.push(a - b);
        else if (operator === '*') stack.push(a * b);
        else stack.push(Math.trunc(a / b));
    };

    for (const value of postfix) {
        if (typeof value === 'number') stack.push(value);
        else calculateOperator(value);
    };

    return stack[0];
};