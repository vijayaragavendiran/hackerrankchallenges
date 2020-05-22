// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    let longest = 0;
    for (let i = 0; i < n; i++) {

        if (c.indexOf(i) === -1) {
            let shortest = Math.abs(c[0] - i);

            for (let j = 0; j < c.length; j++) {

                let dist = Math.abs(i - c[j])
                if (shortest > dist) {
                    shortest = dist;
                }
            }
            if (shortest > longest) {
                longest = shortest;
            }
        }
    }
    return longest;
}

console.log(flatlandSpaceStations(6, [0, 4, 5]));

/*
*
* 4 / 2 = 2
*
* 0 4 5
* 2, 1
* 3 / 2 = 1.5
* 0 1 2 3
*
* 1 3 4
* 2 / 2 = 1
* 1 /2 =  0.5
* 0 1 2 3 4
* 0 S 0 S 0
*
*
*  */