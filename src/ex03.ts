// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.


function logValues(values: any[]){
  for(let i = 0; i < values.length; i++){
    let type = typeof values[i]
    console.log(`${JSON.stringify(values[i])} (${type})`)
  }
}

logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)