const sumAll = function(start, stop, step = 1) {    
    let result;
    let range;
    if (!Number.isInteger(start) || !Number.isInteger(stop) || start < 0 || stop < 0) {
        return "ERROR"
    }

    if (start <= stop) {
        range = Array.from({ length: ((stop - start) / step) + 1 },(_, i) => start + i * step);
    } else {
        range = Array.from({ length: ((start - stop) / step) + 1 },(_, i) => stop + i * step);
    }
    result = range.reduce((total, current) => total + current, 0);
    return result;
}
//     if (start > stop) {
//         let rangeReverse = range.reverse();
//         result = rangeReverse.reduce((total, current) => total + current, 0);
//         return result;
//     } else {
//         result = range.reduce((total, current) => total + current, 0);
//         return result;
//     }
// };

// Do not edit below this line
module.exports = sumAll;
