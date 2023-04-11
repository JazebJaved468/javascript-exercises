// const removeFromArray = function(arr, arg1, arg2) {
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === arg1 || arr[i] === arg2){
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     return (arr);
// };

const removeFromArray = function(arr, ...argArray){
    for(let item =0; item < arr.length; item++){
        for(let arg = 0; arg < argArray.length; arg++){
            if(arr[item] === argArray[arg]){
                arr.splice(item,1);
                item--;
            }
        }
    }
    return (arr);
}


// Do not edit below this line
module.exports = removeFromArray;
