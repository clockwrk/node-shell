var haiku = require('./haiku');


console.log("\nFirst Haiku will have 17 words\n")
console.log(haiku.generateHaiku([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
 
console.log("\nSecond Haiku will have 3 words\n")
console.log(haiku.generateHaiku([5,7,5]));

console.log("\nFirst Haiku will have 6 words with increasing number of syllables\n")
console.log(haiku.generateHaiku([1,2,2,3,4,5]));
