// POST Request k andr jo v data bheja jaata hai wo "query string" k though
// nhi aata hai, wo "request body" k though jaata hai. To POST request ko 
// handle krne k liye isse 2 steps m hm handle krte hai.

// 1. Setup POST request route to get some response
// 2. Parse POST request data => Parse krne k liye humari jo request object
//    hai uske andr "body" naam k ek property hoti hai jiske through request
//    k body k andr jo v data hota hai usko hm access kr skte hai. 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 1. app.use(express.urlencoded({ extended: true}));
// => It means agar URL encoded form m aaya hai kahi se v to usse express 
//    smjh jaega ye pdh k.

// 2. 

// Note : "app.use()" means ye kaam har request k liye hona chaiye.