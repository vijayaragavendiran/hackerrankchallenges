const hourGlass = (n) => {
    let maxY = 3;
    let maxX = 3;
    let total = -Infinity;
    for(let y = 0; y <= maxY; y++) {
        for(let x = 0; x <= maxX; x++) {
            let sum = n[y][x] + n[y][x+1] + n[y][x+2];
            sum += n[y+1][x+1];
            sum += n[y+2][x] + n[y+2][x+1] + n[y+2][x+2];
            if(total < sum) {
                total = sum
            }
        }
    }
    console.log(total);
};
const input = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
];
hourGlass(input);

