/* Write a simple Javascript program to print "Welcome {{Your Name}} to tavisca."
Note: Execute this code on Chrome browser console */

//Get username as input from user
var userName = prompt('Enter your name');

//Print welcome message with embeded username 
if(userName !== null && userName !== "" ) {
    alert(`Welcome ${userName} to Tavisca`); 
} else {
    alert('Welcome to Tavisca');
}
