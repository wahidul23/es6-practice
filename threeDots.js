const ages = [12, 33, 43,45, 27];
const ages1 = [23, 33, 41];
const ages2 = [11, 32, 43, 112, 67];
const allAges = ages.concat(ages1);
const allAges1 = [...ages, ...ages1, ...ages2];
const maxNum = [234, 433, 543, 122, 567];
const maximum = Math.max(...maxNum);
console.log(maximum);
console.log(allAges1);
console.log(allAges);