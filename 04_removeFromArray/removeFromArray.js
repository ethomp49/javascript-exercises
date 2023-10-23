const removeFromArray = function(array, ...removeValues) {
    for (let index = 0; index < array.length; index++) {
        for (const value of removeValues) {
            if (array[index] === value) {
                array.splice(index, 1);
                index--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
