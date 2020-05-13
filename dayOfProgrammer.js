// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    let feb = 0;
    let sevenMonthTotalExpectFeb = 215;
    if (year === 1918) {
        feb = 15;
    } else if (year <= 1917) {
        feb = year % 4 === 0 ? 29 : 28;
    } else if (year >= 1919) {
        feb = (((year % 400) === 0) || (((year % 4) === 0) && ((year % 100) > 0))) ? 29 : 28;
    }
    let day = 256 - (feb + sevenMonthTotalExpectFeb);
    return `${String(day).padStart('2', 0)}.09.${year}`;
}

console.log(dayOfProgrammer(1984));

/*
*1700 to 1917 --> Julian Calender
* 1918 ---> transition year. After jan 31st is feb 14th
* 1919 to 2700 --> Gregorian Calender
* */