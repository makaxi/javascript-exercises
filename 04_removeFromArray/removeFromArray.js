const removeFromArray = function() {
    array = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === arguments[i]){
                //remove arguments[i] from array
                array.splice(j,1);
                break;
            }
        }
    }
    
    return array;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
