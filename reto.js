// var array = [1, 1, 0, -1, -1];
// function plusMinus(arr) {
//     // Write your code here
//     var nElements = arr.length;
//     var positives = 0;
//     var negatives = 0;
//     var zeros = 0;
//     for (var i = 0; i < nElements; i++) {
//         if (arr[i] > 0) {
//             positives++;
//         }
//         else {
//             if (arr[i] < 0) {
//                 negatives++;
//             }
//             else {
//                 zeros++;
//             }
//         }
//     }
//     console.log(positives / nElements);
//     console.log(negatives / nElements);
//     console.log(zeros / nElements);
// }
// plusMinus(array);

var max = 0;
var min = 0;
function sum(array, caseNumber){
    let resSum = 0;

    for(let i = 0; i < array.length; i++){
        if(i+1 != caseNumber){
            resSum = resSum + array[i];
        } 
    }

    if(resSum > max){
        max = resSum;
    }
    if(min == 0){
        min = resSum;
    }
    if(resSum < min){
        min = resSum;
    }
}

function miniMaxSum(arr){
    // Write your code here


    for(let i = 0; i < arr.length; i++){
        sum(arr, i+1);
    }
    
    console.log(min, max);
}

miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);