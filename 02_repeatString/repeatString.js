const repeatString = function(str, num) {
    let output = '';

    if(num < 0) return("ERROR");
    
    for(let i = 0; i < num; i++){
        output += str;
    }
    return output;

};
//ans =repeatString('hey',3);
//console.log(ans);
// Do not edit below this line
module.exports = repeatString;
