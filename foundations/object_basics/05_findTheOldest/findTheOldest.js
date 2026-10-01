const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    arr.sort((personA, personB) => {
        const ageA = (personA.yearOfDeath || currentYear) - personA.yearOfBirth;
        const ageB = (personB.yearOfDeath || currentYear) - personB.yearOfBirth;
        return ageA - ageB;
    });

    return arr.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
