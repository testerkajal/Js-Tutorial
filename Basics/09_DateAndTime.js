//In javascript date is a object when you check the type of the date it will retrun the object
//In js comparison between dates and reading the dates is a pain point.
// Note whether has method associated with it it will be consider as object ex: string has methods so string is also a object
// Here are some of the methods of date object

const myDate = new Date();// this will create a object of date of date type that stores current date.
console.log(myDate) // current date will be returned. i.e 2023-12-23T17:15:02.109Z
// so above returned date is difficult in reading so 
console.log(myDate.toString()) /* we can convert the date to string as well
 i.e Sat Dec 23 2023 17:16:27 GMT+0000 (Coordinated Universal Time)  here it is quite readable than before one*/

 // to simplyfy it more we can use 
 console.log(myDate.toDateString()); // Sat Dec 23 2023 here tme is removed
 console.log(myDate.toLocaleString()); // here format is changed 12/23/2023, 5:18:21 PM


 //For creating user defined date
 const NewDate = new Date(2023, 0 , 23) // here 0 means jan it is the index of 1st month
 console.log(NewDate.toDateString()); // it will print the date only i.e Mon Jan 23 2023

 //For creating both date and time 
 const NewDate1 = new Date(2023, 0 , 23, 5, 3)
 const NewDate2 = new Date("2023-01-14") // you can assign the date in the desired format i.e either yy-mm-dd or mm-dd-yy
 console.log(NewDate1.toLocaleString()); //it will return both date and time i.e 1/23/2023, 5:03:00 AM
 console.log(NewDate2.toDateString()); // retun Sat Jan 14 2023

 // To create 2 date and time
 let myTimeStamp = Date.now(); // current time i.e exact
 console.log(myTimeStamp); /* It will return  the date and time in millisecond i.e 1703352736855
 when you convert this millisecond to date and time online it will return the exact date and time */ 

 // so to compare two dates first convert both to millisecond and compare
 console.log(NewDate1.getTime());  //you will get the above time in millesecond i.e 1674450180000via gettime method

 console.log(myTimeStamp==NewDate1.getTime()) /* it will return false you can store the value first in variable
  and compare the variable as well for ease of understand */


  //Here are some more methods of date object

console.log(NewDate1.getDate()) // to retreive the date only
console.log(NewDate1.getMonth())  // to get the month only it will return 0 as Jan month
console.log(NewDate1.getDay())  // date will be returned

