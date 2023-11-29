//logical operators

const hasDriverLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriverLicense && hasGoodVision); 
console.log(hasDriverLicense || hasGoodVision); 
console.log(!hasDriverLicense); 


// if(hasDriverLicense && hasGoodVision) {
//  console.log('he is able to drive')
// } else {
//     console.log('someone else should drive...')
// }

const isTired = false; 
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('he is able to drive')
   } else {
       console.log('someone else should drive...')
   }