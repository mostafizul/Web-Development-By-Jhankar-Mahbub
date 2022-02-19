function largestElement(numbers){
    let largest = numbers[0];
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}

const numbers = [34,56,34,58];
// largestElement(numbers);

console.log(largestElement(numbers));