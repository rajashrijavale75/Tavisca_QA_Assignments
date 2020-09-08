/* A farmer is asking you to tell him how many legs can be counted 
among all his animals. The farmer breeds three species: 
chickens = 2 legs cows = 4 legs pigs = 4 legs 
Assume on your own for subtotal for each species and 
You have to implement a function that returns the 
total number of legs of all the animals. */

// Define constants
const chickenLegs = 2;
const cowLegs = 4;
const pigLegs = 4

var cowTotalLegs = _getAnimalSpeciesLegs('cow',2);
var chickenTotalLegs = _getAnimalSpeciesLegs('chickens',2);
var pigTotalLegs = _getAnimalSpeciesLegs('pig',2);
_getAnimalSpeciesTotalLegs(cowTotalLegs, chickenTotalLegs, pigTotalLegs);

// Function to get total legs of a given animal species
function _getAnimalSpeciesLegs(nameOfAnimal, noOfAnimal) {
    if (nameOfAnimal == 'chickens') {
      return noOfAnimal * chickenLegs;   
    }
    if (nameOfAnimal == 'cow') {
        return noOfAnimal * cowLegs;   
    }
    if (nameOfAnimal == 'pig') {
        return noOfAnimal * pigLegs;   
    }
    if (nameOfAnimal !== 'chickens' || 'cow' || 'pig') {
        return 0;   
    }
}
  
//Function to get total legs of all animal species
    function _getAnimalSpeciesTotalLegs(cowTotalLegs, chickenTotalLegs, pigTotalLegs) {
        console.log( 'Total number of legs of all the animals = '+(cowTotalLegs + chickenTotalLegs + pigTotalLegs));
    }


// use array for animal to avoid if else condition  
