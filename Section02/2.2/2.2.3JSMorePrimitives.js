const { type } = require("os");

// Create a variable "timeOfDay" and assign it a string
let timeOfDay = 'night'
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `it is almost ${timeOfDay}`

// Print "greeting"
console.log(greeting)
// Create a new variable, but do not assign it a value
let newVariable;
// Print the new variable and its type
// console.log(newVariable, typeOf newVariable)

console.log(newVariable)
// What type should we expect?

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVariable= null
// Print the variable and its type again
console.log(newVariable)
// What type should we expect?
console.log(typeof newVariable);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?

// Print "greeting" again
// Will this line run?
console.log('hello world')





