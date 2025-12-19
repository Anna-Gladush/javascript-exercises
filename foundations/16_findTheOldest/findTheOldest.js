const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const getAge = (person) => {
        const deathYear = person.yearOfDeath ?? currentYear;
        return deathYear - person.yearOfBirth;
    }
    const ordered = people.sort((a, b) => {
        const lastPerson = getAge(a);
        const nextPerson = getAge(b);
        return lastPerson > nextPerson ? -1 : 1})
    return ordered[0];
}
// Do not edit below this line
module.exports = findTheOldest;
