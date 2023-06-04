function reverseArray(n, inputArr){



    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }

    let newArr = '';
    for (let i = arr.length-1; i >= 0; i--) {
        newArr += ' '+ arr[i];
    }
    console.log(newArr);
}
reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5]) 
reverseArray(2, [66, 43, 75, 89, 47]) 