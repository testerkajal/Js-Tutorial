// Conversion operation is basically conducted to convert the data type of any value.
//i.e string to number , number to string, 

let score = "33"
console.log(typeof score)
console.log(typeof(score)) // we ca write the above line in this way as well

console.log(typeof(Number(score))); // here string score will convert to number
console.log(Number(score)); //Output will be 33 i.e a number not string

//Here is a special case i.e 
let score1 = "33abc"
console.log(typeof score1) // it will return a string
console.log(typeof(Number(score1)));// It will return a number but value is not a no it is a String so let's check the value
console.log(Number(score1)); // this will return the valu Nan i.e ot a number so we need to be cautious while dealing with string to no  conversions

// Similary if you convert a null value to number than it will return 0.
let score2 = null;
console.log(typeof(Number(score2))); // it will return dt as number
console.log(Number(score2)) // it will return value of null after conversion to number as 0.

// Similary if you convert a undefined value to number than it will return 0.
let score3 = undefined;
console.log(typeof(Number(score3))); // it will return dt as NaN
console.log(Number(score3)) // return value nothing

//--------------number to Boolean conversion--------
let scoring = 1
console.log(typeof(Boolean(scoring))); // it will return as boolean
console.log((Boolean(scoring))); //It will return the value as True