const fibonacci = function(placeNumber) {
    if (placeNumber === 0 || placeNumber === "0") {
        return 0;
    } else if (placeNumber === 1 || placeNumber === "1") {
        return 1;
    } else if (placeNumber < 0) {
        return "OOPS"
    }

    let results = [1, 1];
    const index = placeNumber - 1;
    for (let i = 2; i < placeNumber; i++) {
        const next = results[i - 1] + results[i-2];
        results.push(next)
    }
    return results[index];
};

// Do not edit below this line
module.exports = fibonacci;
