const sortByOrder = (numbers) => {
    return numbers.sort(function (a, b) {
        return a - b;
    });
}

function getMinCost(employee_id, job_id) {
    // Write your code here
    let sortedEmployeedId = sortByOrder(employee_id);
    let sortedhJobId = sortByOrder(job_id);
    let result = 0;
    for (let i = 0; i <= sortedEmployeedId.length - 1; i++) {
        result += Math.abs(sortedEmployeedId[i] - sortedhJobId[i]);
    }
    return result;
};


const employee_id = [6, 5, 9, 4, 3, 8, 2];
const job_id = [6, 9, 8, 1, 10, 1, 4]
console.log(getMinCost(employee_id, job_id));


