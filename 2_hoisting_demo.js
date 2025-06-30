console.log(hoistedVar); // undefined - var is hoisted with value undefined
var hoistedVar = "I'm hoisted!";

// console.log(notHoistedLet); // ❌ ReferenceError: Cannot access before initialization
let notHoistedLet = "I'm not hoisted!";