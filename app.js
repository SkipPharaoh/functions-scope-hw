console.log('JS Linked')

// 1) VERBAL QUESTIONS

// Parameter - The variable(s) that are in the created function
// Argument - The real data that is passed into the function
// Return - This brings back a value from a function
// Console.log - This is used for debugging and/or to print a value into the console
// The implications of the return function is to bring back the final result of calculations and/or tasks

// 2) CALCULATE THE CUBE

function calculateCube(base, exponent=3){
    return base**exponent
}
console.log(calculateCube(5));

// 3) IS A VOWEL?

function isAVowel(str){
    const vowel = /[AEIOUaeiou]/
    return vowel.test(str)
}
console.log(isAVowel("a"));