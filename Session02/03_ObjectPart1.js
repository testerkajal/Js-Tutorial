// we can declare the object using below methods:
const myObj = {
    name:"Kajal",
    "Class" : 3 , // we can use " at both side or without both side at left only"
 age: 18,
 arr1:["kajal","chau","Misthi"],
 isLogged: false
}


//methods to  access any value from the object
console.log(myObj.name)
//2nd way
console.log(myObj["name"]) /* both will return same value but this methods will work at both the places i.e if key is declared with inverted commas""
or simply as name or other value */
console.log(myObj.Class)


//To freeze the object so that noone can change the value of properties of object 
//Object.freeze(myObj);
//Now try to change the value of any key of object the changes will not reflect.
myObj.age = 19;
console.log(myObj) //as the object is freezed no one can change its any of key value


//Now add Function to the above mentioned object
myObj.greeting = function(){  // we have added the function into the myobj object as a greeting variable
    console.log(`Hello ${this.name}`)  // note this refers to the current object here 
}

console.log(myObj.greeting())
console.log(myObj) ; //now you can see greeting key has been added to the object myobj