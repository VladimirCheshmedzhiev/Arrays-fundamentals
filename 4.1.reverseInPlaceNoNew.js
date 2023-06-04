function reverseInPlace(input){

    
    for (let i = 0; i < input.length/2; i++) {
        let currentEl = input[i];
        let nextEl = input[input.length-1 - i];
        input[i] = nextEl;
        input[input.length - 1 - i] = currentEl;
    
    }
    console.log(input.join(' '))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])