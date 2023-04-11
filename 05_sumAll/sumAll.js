const sumAll = function(from, to) {
    if(typeof(from) !== Number || typeof(from) !== Number ){
        return("ERROR")
    }
    else{
        let sum =0;
        for(let num = from; num <= to; num++){
            sum += num;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
