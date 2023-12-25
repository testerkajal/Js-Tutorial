// Note If we want to merge/concat 2 arrs. we can use 2 methods
//--------------1 we can simply use push--------
const CS_Course = ["DS","Compiler","DAA"]
const  EC_Course = ["DE","Graphs",]
CS_Course.push(EC_Course); // here you will notice EC_course arr added to CS_course as a last element. 
console.log(CS_Course) //i.e [ 'DS', 'Compiler', 'DAA', [ 'DE', 'Graphs' ] ]


// So now if we need to access any element from the arr inside another aar we have to use below
console.log(CS_Course[3][1]) //It will return the 1st elment of the 3th index elemnt. i.e arr inside CS_Course arr

//-------To solve the above access related problem we use concat method. 
const Arr1 = [1,2,3]
const Arr2 = [4,5,6]
const ConctArr =  Arr1.concat(Arr2); //Note unlike push, concat retun a new arr so we have assigned new arr into new varibale

console.log(ConctArr) // [ 1, 2, 3, 4, 5, 6 ]

//-------------spread operator------
//Spread operator is basically used to quickly copy all or part of an existing array or object into another array or object.
const BTech_Courses = [...Arr1, ...Arr2]
console.log(BTech_Courses) /*but in this case we have to spread all the array whose value we want to cpy into new arr.
Sometimes arr is very complex and this operation fails. */

const Arr_another = [1,2,["Kajal","Meenu"], 3,4,[5,6,[7,8]]] // here this is the complex arr
const real_another_arr = Arr_another.flat(Infinity); /* Infinity means it will check all the sub arr itself. we 
don't need to specify */

console.log(real_another_arr) //[ 1, 2, 'Kajal', 'Meenu', 3, 4, 5, 6, 7, 8 ] i.e all subarr elements copied to new arr



