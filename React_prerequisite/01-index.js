/**Things to know before ReactJS:
 * 1. array
 * 2. object
 * 3. destructuring
 * 4. import & export
 * 5. map
 * 6. filter
 * 7. arrow functions
 * 8. spread operator
 * 
 * Note: 
 * (a) Array aisa data structure h jo ek se jyda elements rkh skta hai.
*/

/** Q) Why understanding of arrays & objects, Spread Operator are important?*/

// mutable vs immutable
var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop();

console.log(arr2); // [1,2,3]
console.log(arr); // [1,2,3] => Reference copy nhi hota hai

/**State Immutability:
 * => ReactJS m humein ek "state" naam ki chij milegi, uss bande ko hm 
 *    "mutate" nhi kr skte means directly uski value nhi hata ya jod 
 *    sakte. 
 * => State is immutable (can't be changed).
 * => Aur ab jo padhai shuru hogi wo isi baare m hogi ki state ko immutable
 *    way mai kaise update kre? Immutable way means hm directly array or
 *    object ko change nhi kre rhe hai, hum ek new object bna k de rhe
 *    hai.
*/

// Note Allowed:
var state = [1,2,3,4];
state.pop(); // changing array directly(not allowed in react)

// Allowed:
var state = [1,2,3,4];
state = [1,2,3]; // providing new array to the state(old array is removed and new array placed)

/**
 * (a) Don't change current value, provide new value.
 * (b) Don't use pop(), push(), shift(), unshift() etc.
 * (c) Provide new value by overriding old value.
 * Note: This is why understanding of arrays & objects, destructuring are important.
*/

// How to copy arrays?
var state = [1,2,3,4]; // Rule: cannot change original array

// var copy = state; // not allowed (pop(), push(), shift(), unshift() etc not allowed)
// copy.pop(); // State Rule violated: cannot change original array

// Solution: Spread Operator
var spreadCopy = [...state]; 
spreadCopy.pop(); 

console.log(state); // [1,2,3,4]
console.log(spreadCopy); // [1,2,3]



// Object
var state = {name: "harsh", age: 24}; 

// state.name = "harshita"; // Rule Violated: cannot change original
var copyState = {...state};
copyState.name = "harshita";


console.log(state); // { name: 'harsh', age: 24 }
console.log(copyState); // { name: 'harshita', age: 24 }
console.log(state = copyState); // { name: 'harshita', age: 24 } => replacing state with copyState



// Topic: Destructuring
var obj = {name: "harsh", age: 25}

// humein 10 jagha age chaiye to har baar "obj" extra likhna pd rha hai
obj.age; 
obj.age;  

// Humein "obj.age" m se sirf "age" likhna hai to kaise krnge?
// "age" ko "obj" k bahar kaise nikaalnge?

const {age} = obj; 
// => object h isliye {} bnaye hai, array rehta to [] bnate.
// => aage sirf "age" bolna hai aur wo value "25" access kr paenge

var obj = {name: "string", social: {
    facebook: {
        first: "lalala",
        sec: "asfashsf"
    }
}};

obj.social.facebook.sec; // baar baar sec use krna pdega to dikkat hogi

const {sec} = obj.social.facebook; // solution: facebook tk jao aur sec bahar nikal do


var arr = [12, function(){}, 13];

// var [first, second] = arr; 
// => 12 is named as "first" and function as "second"
// => Basically array m indexing wise chije bahar nikaalte hai 
// console.log(first);
// console.log(second);

// 12 & 13 sirf bahar nikaalna hai
var [chacha,,halua] = arr; // => chacha: 12, halua: 13
console.log(chacha);
console.log(halua);