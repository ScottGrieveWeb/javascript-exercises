const repeatString = function(string, num) {
    let newString = string;

    if (num === 0){
            return newString = '';
        } else if (num < 0){
            return newString = 'ERROR';
        } else {
            for (let i = 1; i < num; i++){
                newString = newString + string;
            }
        }
        
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
