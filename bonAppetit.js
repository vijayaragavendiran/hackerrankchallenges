// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let sum = bill.reduce((acc, item, index) => {
        if (index !== k) {
            acc += item;
        }
        return acc;
    });
    let share = sum / 2;
    console.log(share === b ? 'Bon Appetit' : b - share);
}

bonAppetit([3, 10, 2, 9], 1, 12);

