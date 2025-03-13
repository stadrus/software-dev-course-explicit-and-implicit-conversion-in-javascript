// let result = "5" - 2; we can covert this to a string the results are he same. 
let result = String (("5" - 2));
console.log("The result is: " + result);

// let isValid = Boolean("false");
let isValid = Boolean("flase");
if (isValid) {
    // console.log("This is valid."); convert this line to boolean. because it is a text this is true. 
    console.log(Boolean("This is valid"));

}

let age = "25";
// let totalAge = age + 5; (convert 25 into a number)
let totalAge = Number (age) + 5;
console.log("Total Age: " + totalAge);

let inValid = 0
console.log(Boolean(inValid));

let studentGrade = 83.5
console.log(parseInt(studentGrade));
