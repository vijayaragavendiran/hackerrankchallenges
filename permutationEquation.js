// Complete the permutationEquation function below.
function permutationEquation(p) {
    let result = [];
    for (let i = 1; i <= p.length; i++) {
        let tempV = p.indexOf(i) + 1;
        let y = p.indexOf(tempV) + 1;
        result.push(y)
    }
    return result;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
/*
2 3 1
*x = 1 = 1 is in 3rd pos ==> p(3) ==> 3 is in 2nd pos = 2
* x =2 = 2 is in 1st pos ==> p(1) ==> 1 is in 3rd pos = 3
*x = 3 = 3 is in 2nd pos ==> p(2) ==> 2 is in 1st pos = 1

4 3 5 1 2

* x = 1 = p(4) = 1
* x = 2 = p(5) = 3
  x = 3 = p(2) = 5
  x = 4 = p(1) = 4
  x = 5 =  p(3) = 2
* */