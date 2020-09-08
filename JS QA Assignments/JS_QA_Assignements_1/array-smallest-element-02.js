/*Return smallest number from an array.
     Array Spec-
       a) [100, 2, 5, 12, 0]
       b) [-5, -10 , 100, 20, 30, -30, 12]
*/

const a = [100, 2, 5, 12, 0];
const b = [-5, -10 , 100, 20, 30, -30, 12]
let smallestNumber = a[0];  
_getSmallestElement(a);
_getSmallestElement(b);

//Function to get smallest number in an array
function _getSmallestElement(array) {
    for (let i=0; i<array.length;i++) {
        let value= array[i];
        smallestNumber = (value < smallestNumber) ? value: smallestNumber;  
    }
    console.log(`Smallest element in array ${array} is ${smallestNumber} `);
}