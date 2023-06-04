function evenAndOddSum(numbers) {

    let oddSum = 0;
    let evenSum = 0;

    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenSum += numbers[i];
        } else if(numbers[i] % 2 != 0){
            oddSum += numbers[i];
        }
    }
    console.log(evenSum - oddSum)

}

evenAndOddSum([2,4,6,8,10])