 //Unlike other programming language in js we can store data of different data types in an arr.
 //-------Array declaration-------
 const Arr1 = [1,2,3,4,5]
 const Arr2 = ["kajal","Kriti","Rahul"]
 const Arr3 =  [1,2,3,"shaktiman"]
 const Arr4 = new Array(1,2,3,4,5) // here we don't need []

 //----------How to access arr elements-----
 console.log(Arr2[1])


 //---------Array Methods----------
 //1) Add elements in the arr
 Arr1.push("kajal") // As we have already discussed that in Non primitive data types original value of the variable changes.
console.log(Arr1) // push added the element at the last of the arr

//2) delete arr element
Arr1.pop() // pop will delete the last element from the arr
console.log(Arr1) 

// 3) To add the element at the start of the arr
Arr1.unshift("Kajal") /* We avoid using unshift as in case of small arr it works well but in case arr is very large it will put load on 
computer in shifting all the values */
console.log(Arr1);

// 4) To delete the element from the start of the arr
Arr1.shift() // this will remove the first element of the arr
console.log(Arr1)

// 5) To check any element exist in an array
console.log(Arr1.includes(9)); // It will return false as 9 not exist in arr1

//6) To Check the index of the any value in an arr
console.log(Arr1.indexOf(15)) // It will return -1 as 15 not exist in arr1
console.log(Arr1.indexOf(1)) // it will return 0 as 1 exist at 1 index of the arr

//7) To convert any arr into string
const NewArr =  Arr1.join()
console.log(Arr1) // it will retrun the arr
console.log(NewArr) // it will return arr as string you can check it's type as well to confirm

//8) Slice: It will return by not including the last element
const NewArr1 =  [1,2,3,4,5,6]
console.log(NewArr1.slice(1, 3))// It will return the arr including element at 1 and 2 index of orignial arr not include 3rd index elment
console.log(NewArr1)

//9) splice: It will also include the element whose index you have given in 2nd argument. + It will change the original arr after splice operation
console.log(NewArr1.splice(1,3)) // it will return 2, 3 and 4 as it wll include element at 3rd index as well
console.log(NewArr1) // now you will see original arr is also changed

