//There is no problem while we convert the simple values as shown below:
console.log(2==1);
console.log("02"=="2"); //here it is giving false as both are string value and not equal
console.log("02"==2); // here 1 is string and 1 is no so type conversion takes place in js by default
console.log("True"=="True"); //because both strings are equal
console.log(2>=1); 
console.log(2<=1);

// But Above case can confuse you some places when you write functions and lenthy code.
// So solve that problem we will use the concept of strict comparison
console.log("02"===2); // now in this case both value and its datatype will be compared as auto conversion will not work here.
//above it was giving result true but here result will be false.

