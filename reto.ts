const array: number[] = [1,1,0,-1,-1];

function plusMinus(arr: number[]): void {
    // Write your code here
    let nElements: number = arr.length;
    let positives: number = 0;
    let negatives: number = 0;
    let zeros: number = 0;
    
    for(let i: number = 0; i < nElements; i++){
        if(arr[i] > 0){
            positives++;
        }else{
            if(arr[i] < 0){
                negatives++;
            }else{
                zeros++;
            }
        }
    }
    console.log(positives/nElements);
    console.log(negatives/nElements);
    console.log(zeros/nElements);
}

plusMinus(array);