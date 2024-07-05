// map filter:
// => map filter - dono hi array pe chalti hai, aur dono ka kaam hai 
//    array par kuch perform karna and "ek naya array return krna".

var arr = [1,2,3,4,5];

// map - har element par kuch karo aur new array m rakho
// map k andr aata hai function and function k andr aata hai value
const ans = arr.map(val => val*2);

// map k andr return krne k wajah se hi element new array m place hote hai
console.log(ans);

// => State ek array hai usme numbers hai aur aapko har number ko +1 
//    karna hai
var state = [1,2,3,4,5];
// state[0] + 1; // We cannot do that with state in react
const copyState = state.map(elem => elem+1);
console.log(state);
console.log(copyState);

// update state
console.log(state = copyState);


// ek array hai jisme saare numbers jo ki 5 se bade hai unke 5 jod dena
// and baaki numbers waise ke waise return karo naye array mai

var state = [11, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const answer = state.map(elem => elem>5 ? elem+5 : elem); // map + ternary operator
console.log(answer);

// map filter m ek hi fark hai, map saare bande lautata hai matlab ki 
// count kam nhi hoga, filter bando ko kam kar skta hai

// ek array mai sabhi nums jo ki 5 se bde hai usme 10 add karo

// jb original array ka size kam naa hona ho waha map use hota hai

// jb original array ka size kam karna ho to waha filter use hota hai

// ek array m se saare wo numbers hata do jo ki 5 se chota hai
var array = [1,2,3,4,5,6];
const filterarray = array.filter(elem => elem>4);
console.log(filterarray);

var array2 = [
    {name: "harsh", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "harshika", gender: "female"},
];

const answer2 = array2.filter(elem => elem.gender === "male");
console.log(answer2);


var array3 = [
    {product: "iphone", price: 120000},
    {product: "airpods", price: 50000},
    {product: "ipad ", price: 70000},
    {product: "munch", price: 5},
];

// ek array m se saare wo numbers hata do jo ki 5 se chota hai
const answer3 = array3.filter(elem => elem.price<20);
console.log(answer3);