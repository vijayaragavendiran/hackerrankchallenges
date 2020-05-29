// Complete the isBalanced function below.
function isBalanced(s) {
    const list = s.split('');
    let brackets = [];
    for (let i = 0; i <= list.length - 1; i++) {
        switch (list[i]) {
            case '{':
            case '[':
            case '(':
                brackets.push(list[i]);
                break;
            case '}': {
                if ((brackets.length === 0) || (brackets[brackets.length - 1] !== '{')) {
                    return 'NO';
                } else {
                    brackets.pop();
                }
                break;
            }
            case ')': {
                if ((brackets.length === 0) || (brackets[brackets.length - 1] !== '(')) {
                    return 'NO';
                } else {
                    brackets.pop();
                }
                break;
            }
            case ']': {
                if ((brackets.length === 0) || (brackets[brackets.length - 1] !== '[')) {
                    return 'NO';
                } else {
                    brackets.pop();
                }
                break;
            }
        }
    }
    return brackets.length === 0 ? 'YES' : 'NO';
}

const s = '{[(])}';
console.log(isBalanced(s));

/*
* open = ['{(([']
* close = ['])']
* []()
* open = ['{([']
* close = ['])']
*open = ['{[']
* close = [']}']
*
* {(([[[
* ])])]}
*
* **/