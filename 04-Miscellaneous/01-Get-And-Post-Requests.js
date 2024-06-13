// GET and POST requests :
// (a) GET :
//  => Used to GET some response
//  => Data send in query strings (limited, string data & visible in URL)
//     means GET request k andr agar humein kuch additional data bhjna hota
//     hai to usko hm bhjte hai in the form of "query string". Hm jb v koi
//     URL bhjte hai GET request k form mai to uss URL ki har jagha ek limit
//     hoti hai means agar hm chrome pe kisi URL k through GET request lene
//     ki koshish kre/link bhj rhe hai aur humein pta hai ki GET request ka
//     jo link hota hai usi k andr saari ki saari "query string/data" dikhai
//     deta hai. To agar iss tarike k query string k saath hm data bhj rhe
//     hai to har browser pr URLs ki kuch limit hoti hai ki humari URL max
//     itni hi length k ho skta hai. Isliye GET request k saath jb v hm
//     additional data bhjne ki koshish krte hai to hm uske andr limited
//     data ko bhj paate hai, saath k saath hm query string k andr jo v data
//     bhjte hai wo humaare string type ka data ban jaata hai.
// => GET request ka ek aur drawback ye hai i=ki jb v hm query strings k
//    through GET Request m additional data bhjte hai wo data humesa URL k
//    andr dikhai deta hai means Query String m jo v parameter bhjte hai wo
//    dikhai deta hai jo bilkul safe nhi hai.
// Note : Already pdh chuke hai ki kaise get request ko bhejna hota hai aur kaise
//        hm request ko receive kr skte hai server side pr. 

// We have created a frontend form : index.html
// => When we fill the username and password and then try to submit the form,
//    request will go to the "/register" and ye file protocol k through request
//    jaa rhi hai means HTTP Protocol pe hm nhi h. And when we request go to
//    the "/register", it is displaying the username and password in the URL :
//    http://127.0.0.1:5501/register?user=Mohammad&password=12345 

// => Iss tarike k sensitive information like username and password ko hm
//    GET request k through bhjte form m to wo sbkuch v dikhai deta hai.
//    Aur har browser k paas limit hai ki wo kitni length ka URL accept kr
//    skta hai, aur jyda agar data hoga URL k andr to browser humein allow
//    nhi krega uss URL ko use krne mai.

// Note : Ye ek limitation aa jaati hai GET Request k sath jo kahi na kahi
//        POST request poori kr deta hai.

// (b) POST :
//  => Used to POST something (for Create/Write/Update)
//  => Data sent via request body (any type of data)

// Similarly, hm ek form bnaenge POST request k saath.
// Ab iss form mai username & password daal k hit kiya, but iss case mai
// data URL k andr nhi dikhega, qki poora ka poora data humaari "request body"
// k andr send hota hai :
// http://127.0.0.1:5501/register

// So, POST request ka actual kaam hota hai "to post something".
// Let's suppose humaare paas backend k andr koi v database hai aur database
// andr poori website ka data stored hoga, ab agar humein database k andr koi
// new chij create/write/update krna hai to unn saare operations k liye hm
// POST request ko use krte hai.

// GET request ko generally hm unn queries k liye use krte hai jb humein 
// kuch response wapas chaiye hota hai, for example, google search k liye hm
// get request use krte hai, but agar humein google drive pe kuch upload krne
// k liye request bhjni hai to wha pe hm data ko upload krne ki koshish kr 
// rhe hai, to humein kuch data send krna pdega, to aise kaam k liye hm POST
// request use krnge aur iske saath jo data jaata hai wo "request body" k andr
// jaata hai.

// Jaise GET request k andr limit hoti hai ki query string k andr jo data hota
// hai wo string type ka data hota hai but aisi POST Request m koi limitation
// nhi hota hai, we can all type of data like string, text, JSON etc.

// Note : We can use GET request to send data but POST request is safe and
//        preferred.