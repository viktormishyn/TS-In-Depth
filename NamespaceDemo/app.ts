/// <reference path="utility-functions.ts" />

let result = Utility.maxBooksAllowed(10);
console.log(result);

import util = Utility.Fees;
// Utility.Fees.calculateLateFee(100)
result = util.calculateLateFee(100);
console.log(result);
