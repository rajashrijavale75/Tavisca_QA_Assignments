/* Given two arrays determine if the first array is contained in the second 
or if the second array is contained in the first 
or if both arays are same or if none of the above statements are true. 
Examples:  
A = [1, 2, 3], B = [1, 2, 3, 4, 5], A is a subset of B
A = [3, 4, 5], B = [1, 2, 3, 4, 5], A is a subset of B
A = [3, 4], B = [1, 2, 3, 4, 5], A is a subset of B
A = [1, 2, 3], B = [1, 2, 3], A is same as B
A = [1, 2, 3, 4, 5], B = [2, 3, 4], B is a subset of A
A = [1, 2, 6], B = [1, 2, 3, 4, 5], A and B are not equal.
*/

//Define arrays
var array1 = [3,4 ];
var array2 = [1, 2];
_arrayCompare(array1, array2);

/*Function to Compare two arrays to check if first array belongs to array 2 or vice a versa
 or if both arrays are equal. */
function _arrayCompare(array1, array2) {
    var result1 = array1.every(v1 => array2.includes(v1));
    var result2 = array2.every(v2 => array1.includes(v2));
    // compare results  
    if (result1 == true && result2 == false) {
    console.log('Array1 belongs to Array2 and they are not equal');
    }
    if (result1 == false && result2 == true) {
    console.log('Array2 belongs to Array1 and they are not equal');
    }
    if (result1 == true && result2 == true) {
        console.log('Array1 and Array2 are equal');
    }
    if (result1 == false && result2 == false) {
        console.log('Array1 and Array2 are unequal');
    }
}
