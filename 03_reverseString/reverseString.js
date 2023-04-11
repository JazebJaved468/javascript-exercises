const reverseString = function(str) {
    strSplit = str.split('');
    let newarray = [];
    for(let char of strSplit){
        newarray.unshift(char);
    }
    let reverseStr = newarray.join('');
    return(reverseStr);
};

// Do not edit below this line
module.exports = reverseString;
