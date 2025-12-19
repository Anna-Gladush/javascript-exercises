const palindromes = function (s) {
    let letters = s
                    .toLowerCase()
                    .split('')
                    .filter((letter) => (!letter.includes(" ") && !letter.includes(",") && !letter.includes(".") && !letter.includes("!") && !letter.includes("?") && !letter.includes(":") && !letter.includes(";")))
                    .join('');

    let reverse = s
                    .toLowerCase()
                    .split('')
                    .reverse()
                    .filter((letter) => (!letter.includes(" ") && !letter.includes(",") && !letter.includes(".") && !letter.includes("!") && !letter.includes("?") && !letter.includes(":") && !letter.includes(";")))
                    .join('');
    if (letters === reverse) {
        return true
    } else {
        return false};

}

// Do not edit below this line
module.exports = palindromes;
