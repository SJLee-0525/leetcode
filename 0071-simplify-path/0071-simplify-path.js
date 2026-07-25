/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.split('/');
    console.log(pathArr)

    const stack = Array();

    for (const c of pathArr) {
        if (!c || c === '.') continue;
        if (c === '..') {
            if (stack.length) stack.pop();
            continue;
        };
        
        stack.push(c);
    };

    return '/' + stack.join('/')
};