// Complete the isBalanced function below.
function isBalanced(s) {
    const ref = [{key: '{', value: '}'}, {key: '[', value: ']'}, {key: '(', value: ')'}];
    const open = ['{', '(', '['];
    const close = ['}', ')', ']'];
    const tempOpen = [];
    const tempClose = [];
    const list = s.split('');
    let j = 0;
    let previous = '';
    let c = true;
    for (let k = 0; k <= list.length - 1; k++) {
        //console.log(list[k]);
        if (open.indexOf(list[k]) !== -1) {
            if ((previous !== 'open') && (tempClose.length > 0)) {
                let count = Math.min(tempOpen.length, tempClose.length);
                let i = 1;
                // console.log('@@ ', tempOpen, tempClose);
                while (i <= count) {
                    // console.log('@@' , i);
                    const shift = tempClose.shift();
                    const pop = tempOpen.pop();
                    const f = ref.filter((y) => {
                        if (y.key === shift) {
                            return i;
                        }
                    });
                    const temp = f.length !== 0 ? f[0].value : '';
                    if (temp !== pop) {
                        // i = count + 1;
                        c = false;
                    }
                    i++;
                }
            }
            tempOpen.push(list[k]);
            //console.log('@@@', tempOpen, tempClose);
            previous = 'open'
        } else if (close.indexOf(list[k]) !== -1) {
            if ((previous !== 'close') && (tempClose.length > 0)) {
                //console.log('## ',tempOpen, tempClose);
                let count = Math.min(tempOpen.length, tempClose.length);
                let i = 1;
                while (i <= count) {
                    const shift = tempClose.shift();
                    const pop = tempOpen.pop();
                    const f = ref.filter((y) => {
                        if (y.value === shift) {
                            return i;
                        }
                    });
                    const temp = f.length !== 0 ? f[0].value : '';
                    if (temp !== pop) {
                        // i = count + 1;
                        c = false;
                    }
                    i++;
                }
            }
            tempClose.push(list[k]);
            //console.log(tempOpen, tempClose);
            previous = 'close'
        }
    }
    let count = Math.min(tempOpen.length, tempClose.length);
    let i = 1;
    while (i <= count) {
        const shift = tempClose.shift();
        const pop = tempOpen.pop();
        const f = ref.filter((y) => {
            if (y.value === shift) {
                return i;
            }
        });
        const temp = f.length !== 0 ? f[0].key : 'hhh';
        if (temp !== pop) {
            i = count + 1;
            c = false;
        }
        i++;
    }
    return (tempOpen.length === 0 && tempClose.length === 0) ? 'YES' : 'NO';
}

const s = '{(([])[])[]}[]';
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