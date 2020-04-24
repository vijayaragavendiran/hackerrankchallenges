function kangaroo(x1, v1, x2, v2) {
    if ((x2 > x1) && (v2 > v1)) {
        return 'NO';
    } else {
        let diff = (x2 - x1);
        if (diff % (v1 - v2) === 0) {
            return 'YES';
        } else {
            return 'NO';
        }

    }
}

console.log(kangaroo(0, 3, 4, 1));