// arrow function(implicit return)


// 1. Basic Arrow Fn
const abcd = () => {
    console.log("abcd");
}

abcd();

// 2. Arrow Function with one parameter
const cdef = (val) => {
    console.log(val);
}

cdef(12);

// But agar humaare paas single parameter h to hm direct aise v likh skte hai
const efgh = value => {
    console.log(value);
}

efgh(15);

// Multiple parameters:
const ijkl = (value1, value2) => {
    console.log(value1, value2);
}

ijkl(12, 13)


// 3. Arrow Function with Implicit Return
// => Arrow k baad body open nhi krnge to jo likh denge wahi return ho jaega.
// => Jaha par v mnop() likh denge wahi pe 12 aa jaega.
const mnop = () => 12;
console.log(mnop() + 1); // return means mnop() chlaenge to mnop() k jagha 12 aa jaega
// 12 + 1 => 13

const arrowfn = () => "harsh";
console.log("hey " + arrowfn());

// => But "{}" lga de to return nhi hoga
// => Return krne k liye "return" keyword use krna pdega.

const arrowfn2 = () => { return "harsh" };
console.log("hey " + arrowfn2());


// Tricky part:
// => Humein ek object return krna hai, and object to khud hi curly braces "{}"
//    hote hai, to compiler ya interpreter confuse ho jaata hai ki ye
//    {} body k liye lagaye gye hai ya object k liye lagaye gye hai.
// => It is returning "undefined", because ye object hai hi nhi, fn isko
//    as a body treat kr rha hai.
// => Arrow Fn ko kaise btaenge ki ye body nhi object hai? Use 
// => Small bracket k andr use curly braces : ({})
const trickyFn = () => {name: "harsh"};
console.log(trickyFn()); // returning fn body: "undefined"

const trickyFn2 = () => ({name: "harsh"});
console.log(trickyFn2()); // returning object: { name: 'harsh' }