const getPositionOfFruit = (s, t, treePosition, fruitsPosition) => {
    let result = 0;
    for (let i = 0; i <= fruitsPosition.length - 1; i++) {
        let position = treePosition + (fruitsPosition[i]);
        if ((position >= s) && (position <= t)) {
            result += 1;
        }
    }
    return result;
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(getPositionOfFruit(s, t, a, apples));
    console.log(getPositionOfFruit(s, t, b, oranges));
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

/*Input Format

The first line contains two space-separated integers denoting the respective values of  and .
    The second line contains two space-separated integers denoting the respective values of  and .
    The third line contains two space-separated integers denoting the respective values of  and .
    The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
    The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

 */