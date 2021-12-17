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

// 4) GET TWO LENGTHS

function getTwoLengths(str1,str2){
    return [str1.length, str2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5) SUM ARRAY

function sumArray(arr){
    let sum = 0
    for (let i=0; i < arr[i]; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6) PRIME NUMBERS

function checkPrimes(num){
    for (let i=2; i<num; i++){
        if (num % i === 0){
            return false
        }
    }return true
}
console.log(checkPrimes(47));

function printPrimes(number){
    for (let i=2; i<=number; i++){
        if (checkPrimes(i) === true){
            console.log(i)
        }
    }
}
printPrimes(97)

// 7) PRINT LONGEST WORD