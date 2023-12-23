/*Note: Javascript is a Dynamically Typed language as here interpreter assigns variables a type at runtime based on the variable's value at the time.
so we don't need to tell the data type of the variable at the time of declaration or init as we do in statically typed lang.
*/

/*On the basis of how the data stored in th memory and how we access them, Datatypes are divided into 2 categories.
i.e 1) Primitive DataType and 2)Non Primitive DataType */

/*  --------------Primitive DataType ----------- Are generally Call by value--------
7 Types: String , Boolean, Number, null-Empty, undefined, symbol-we use to make any value unique, 
BigInt- To handle with length int values */

const Name = "Kajal"
const IsLogged = true
const Score = 10 
const Score1 = 10.3 // above and this both comes into num category here so float or decimal in javascript
const temp = null // null means not 0. it is empty
let userEmail;
const id = Symbol("123") //here symbol will return a unqiue value
const anotherId = Symbol("123")// here and above we are using same value inside symbol.
//but both will retuen unique value lets make comparison between the two.
console.log(id);
console.log(anotherId); // both will return same value but they are unique as we have used symbol keyword
console.log(id===anotherId); // result will be false as both are retuening unique value

const BigNumber = 6487449859656668065;// here it is showing error as it is greater than the length that Int stores
const BigNumber1 = 6487449859656668065n; // but if you add n at the last of the number it means it is stored in bigInt data type
console.log(typeof BigNumber1); // now if you check the datatype of it it will return bigInt


/*-----------------Reference Type: (Non-Primitive DataType)-----------
 3 Types: Array, Objects, Functions */
 //------------Arrays: Thats stores same datatype values in contigous memory location
const heros = ["shaktiMan","Naagraj", "SpiderMan"];
console.log(heros)

    //-----Objects: Comes into play when we want to store different values with different datatypes in the memory
let myObj = {
    LastName:"Chau",
    Rollno: 24,
    IsTested: true,

}
console.log(myObj); // it will print all the values value with varibale name 

//---------Functions-------
const myFunction =  function(){
    console.log("Hello World");
}
myFunction(); // calling function

//Note: you can the data types as I shown above by printing the type of the variable value.

 