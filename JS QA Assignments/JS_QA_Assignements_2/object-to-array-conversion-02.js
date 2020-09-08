/* Write a function that converts an object into an array, 
where each element represents a key-value pair.
 Example- toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] 
 Notes Return an empty array if the object is empty. */

const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");

 
//Define an object
 const object1 ={'a': 1, 'b': 2}; 
 const object2 ={};
 _objectToArrayConersion(object1);
 _objectToArrayConersion(object2);

//Function to get array element as object's key value pair 
function _objectToArrayConersion(object1) {
    if(Object.keys(object1).length !== 0) {
        const array1 = Object.entries(object1);
        console.log('Converted array is: ');
        console.log(array1);
    } else {
        let array2 = Object.entries(object1);
        console.log('Converted array is empty : ');
        console.log(array2);
    }
}







 

