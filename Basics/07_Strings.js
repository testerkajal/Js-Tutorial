//There are two methods of declaring string in JS
//---------First-------
let Name = "Kajal" //we can write a sting in both single or double quote
//basically string returns an object so we can access its value like
console.log(Name[0])

//----------2nd------
const getName = new String('Kajal Chaudhary') // the use case of declaring string is here we can acess all the methods of the string
console.log(getName.charAt(3)) // it will return the value at 3rd index
console.log(getName.length) // we can find the length of the string value
console.log(getName.indexOf('C')); // It will retrun the index of C

//-----We can concatinate both variable and string value together-----
//----FirstMethod-------
console.log("My Name is" + ' ' +  Name); // This method is rarely we use as it is not the best practice here we need to add spaces like ''

//-------2ndMethod------
console.log(`My Name is ${Name} and I am a good student`) /* this is the good practice as we can use string methods.
 and it looks readable as well here */

 //-------Most commonly used string methods
 const City = "Ghaziabad"
 console.log(City.substring(0 , 4)); // it will return a subsstring of city starting index will be 0 and last index will be four.
 console.log(City.slice(-8, 4)) // This will also return a substring but here we can give -ve value as well. so that it can count from last

 const newCity = " Noida "
 console.log(newCity.trim()); // it will remove all the spaces either in start or end but not in the mid
 console.log(newCity.trimStart()) // it will remove the space from start
 console.log(newCity.trimEnd()) // to remove the space from end 
 //Note: the oringnal string is not getting changed here as we use stack MA for primitive data types and they are call by value.

 const url =  "https://www.testerkajal.com/java%20script%20tutorial"
 console.log(url.replace("/%20", "-")); // here %20 will replaced by - but here you will notice that only first %20 will get replace.
  //2nd one strill remains so remove all %20 or some other value from the string use below format
 console.log(url.replace(/%20/g, "-")); // here all %20 will replaced by -

 console.log(url.includes('github' )) //to check whether a string contains some value. It will return false

 //----------to split the string on the basis of space------
 const Education = "I have completed B.Tech"
 console.log(Education.split(' ')) // this will split the string wherever space is found
 console.log(Education.split('.')) //this will split the string wherever . found i.e [ 'I have completed B', 'Tech' ]