const palindromes = function (str) {
    let tempString = "";
    let reverseString = "";
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z") || (str[i] >= "0" && str[i] <= "9")) {
            tempString += str[i];
        }
    }

    tempString = tempString.toLowerCase();

    for (let i = tempString.length - 1; i >= 0; i--) {
        reverseString += tempString[i];
    }

    return reverseString === tempString;
}
// Do not edit below this line
module.exports = palindromes;
