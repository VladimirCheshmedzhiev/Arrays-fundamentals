function reverseInPlace(input){

    let newArr = '';
    for (let i = input.length-1; i >= 0; i--) {
        newArr += ' '+ input[i];
    }
    console.log(newArr);



}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])