const reverseString = function(string) {
    reversedStr = "";
    len = string.length;
    for(let i = 1; i <= len; i++){
        reversedStr += string[len - i];
    }
    return reversedStr;
};

console.log(reverseString('hello'));


// Do not edit below this line
module.exports = reverseString;
