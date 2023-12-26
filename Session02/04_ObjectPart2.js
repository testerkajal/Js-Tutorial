// here we will discuss about singleton and constructor object.
//--------Singleton Object
const tinderUser = new Object() 


//non Singleton object
const tinderUser1 =  {} // both will give empty object i.e {} as an object

// to enter the values inside the tinderUser1 object
tinderUser1.id=1234
tinderUser1.name="kajal"

//Object nesting inside another object
const UsersDate = {
    email:"kajal@gmail.com",
    UserName:{
        fullname:{
            firstName: "Kajal",
            lastName: "Chaudhary"

        }
    }
}


//now to access the data 
console.log(UsersDate.UserName) // you can access the whole object 
console.log(UsersDate.UserName.fullname.firstName) // to access the data inside nested obj

//-----To combine 2 objects together
const obj1 ={1:"a",2:"b",3:"c"}
const obj2 = {4:"d", 5:"e"}
const obj3 = {6:"f", 7:"g"}
const newObj =  {obj1,obj2} // but this will return object inside object we want a single obj having data of both the objs.
console.log(newObj)

// so do the same we will use assign method
//note: object assign is a static method that copies all properties from one or more object to target obj.
const obj4 =  Object.assign({},obj1, obj2, obj3) // this will retrun a single obj having all the element of both the objs together.
/*please note here {} given as a first argument means all the values of obj1,obj2,ob3 are copying to target object {}. if we will
not give this then it will consider that obj1,obj2,ob3 are coying to obj1 itself. */
console.log(obj4) 
console.log(obj1) //if you not give {} above then its value will be changed to same as obj4.
//another way of doing the same

//----Another way of copying obj value to another obj using spread operator most commonly used
const obj5 = {...obj1, ...obj2, ...obj3} // it is same as we used in array
console.log(obj5)

// to acess the keys of any obj
console.log(Object.keys(tinderUser1)) ; // this will retrun the array of keys of the object tinderuser i.e [ 'id', 'name' ]
// to acess the values of any obj
console.log(Object.values(tinderUser1))  //return values only  [ 1234, 'kajal' ]
console.log(Object.entries(tinderUser1))  // retrun array of key value pair insde another array i.e [ [ 'id', 1234 ], [ 'name', 'kajal' ] ]

//To check whether any property or key exists inside any object.
console.log(tinderUser.hasOwnProperty('isLogged')) // it willreturn false as islogged property doesn't exist inside tinderuser