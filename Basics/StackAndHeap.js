/* In javascript we not need to worry about memory management like: how much memeory we need to assign and how to free up unused menory
Js support auto memory management i.e Garbage collection.The purpose of a garbage collector is to monitor memory allocation 
and determine when a block of allocated memory is no longer needed and reclaim it. */

// When we use stack it uses primitive data type
// when we use head it uses Non Primitive data types

//-------Stack------In Stack we uses the copy and if changes the value of any of the varibale the origional value don't change

let City = "Ghaziabad"
let NewCity = City; // here we are using variable as a value so new city has ghaziabad
NewCity = "Gurugram" // now we are changing the value of newcity but city will have gahziabad

console.log(City, NewCity)

//---------Heap-------- But in case of heap unlike stack, heap uses refernce of the varibale so the oringnal value changes.Ex:
let UserOne = {
    email: "kajal@gmail.com",
    upi: "user1@ybl",
}
console.log(UserOne.email); // to access and priniting obj items

let userTwo = UserOne
console.log(UserOne)
user2.email = "kajal2@gmail.com" // changing the value of Orignal obj email
console.log(UserOne.email)
console.log(userTwo.email) // here and above both will give same o/p as we have changes the value of orignal obj.

/* ------------Summary
When we use stack we always deal with the copy of the variable while in case of head we actually deal with the orignal Value.
*/