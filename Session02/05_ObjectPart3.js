// Here we will discuss destucturing of the object. we can apply destucturing to both array or object
const course = {
    price: 999,
    Instructorname: "Kajal",
    name: "Data Structure"
}

// generally to access the values of any keys we do 
course.name // but if we need to do this operation multiple places in our code than it makes the code very lengthy
//so we will use destucturing
 const {Instructorname: teacher} =  course /* here  we are fetching the instuctorname value from course object
  and teacher is the user defined short name for easiness. */
  console.log(teacher) // now you can directly access the value like this. yo don't need to write object.key again and again