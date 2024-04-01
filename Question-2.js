function generateArray(start, end) {
    let array = [];
    let step = start <= end ? 1 : -1;
    for (let i = start; step > 0 ? i <= end : i >=end;
         i += step) {
        array.push(i);
    }
    return array;
}
console.log(generateArray(4, 7));
