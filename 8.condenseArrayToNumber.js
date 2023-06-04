function condenseArrayToNumber(numbers) {

    let result = 0;
    let condensed = [];


    while (numbers.length > 1) {
        for (let i = 0; i < numbers.length - 1; i++) {
            condensed[i] = (numbers[i] + numbers[i + 1]);
        }
        numbers = condensed;
        condensed = [];
    }
    console.log(numbers.toString())
}

condenseArrayToNumber([20])