function timeConversion(s) {
    let split = s.split(':');
    let result = '';
    let hour = parseInt(split[0]);
    let min = split[1].padStart(2,0);
    let sec = split[split.length-1].slice(0,2).padStart(2,0);
    let mode = split[split.length-1].slice(2);
    let tempHour = 12;
    if(mode === 'PM') {
        tempHour = hour < 12 ? tempHour + hour : hour;
    } else {
        tempHour = hour === 12 ? '00' : hour;
    }
    tempHour = tempHour.toString().padStart(2, 0);
    result = `${tempHour}:${min}:${sec}`;
    return result;

}
console.log(timeConversion('07:05:45PM'));