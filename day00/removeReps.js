function removeReps(array) {
    var result = [];
    var i = 0;
    for (let elem of array) {
        if (!(result.includes(elem))) {
            result[i] = elem;
            i++;
        }
    }
    return result;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
