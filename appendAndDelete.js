// Complete the extraLongFactorials function below.
function appendAndDelete(s, t, k) {
    const sl = s.length;
    const tl = t.length;
    let diff = 0;
    let m
    for (let i = 0; s[i] && t[i] && s[i] === t[i]; i++) {
        diff = i
    }
    m = sl + tl - 2 * (diff + 1); // + 1 is because diff is cal based on index, we need to have in length.
    return (((k >= m) && (k - m) % 2 === 0) || (sl + tl) <= k) ? 'Yes' : 'No';
}

const s = 'abc';
const t = 'abc';
const k = 7
console.log(appendAndDelete(s, t, k))

/*
t = hackerran = 8
t = hackerra = 7
t = hackerr = 6
t = hacker = 5
s = hackerhapp = 4
s = hackerhap = 3
s = hackerha = 2
s = hackerh = 1
s = hacker = 0

* */