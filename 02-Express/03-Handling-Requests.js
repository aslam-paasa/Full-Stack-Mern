
const express = require('express');
const app = express();

let port = 8080;

app.listen (port, () => {
    console.log(`app listening on port ${port}`);
});

/**
 * Q. Agar humein response bhejna hota to hum kaise bhj skte hai?
 * => Way-1 : app.use()
 *    Humare "app" object k andr "use()" naam ka function hota hai, ye function har
 *    tarike k request, chahe wo GET, POST, PUT, DELETE etc... ho, kisi v URL ko
 *    humne request bheji ho, ye sb tarike k request ko listen krega and uss hisaab
 *    se iske andr humara ek callback hai jo execute hota hai jb humaare server k paas
 *    koi v request aati hai.
 * 
 *    To jb v 8080 port/server k upar koi v new request aaegi to "app.use()"
 *    "new incoming request" print krwa dega humaare console k upar
*/

app.use((req, res) => {
    console.log("new incoming request");
});

/**
 * => Page ko jb open krnge tb humein kuch nazar nhi aaega 
 *    lekin console m dekhnge to "new incoming request" print hote hue nazar aaega
 *    Means humaare port 8080/server k paas request aayi aur jb humne browser
 *    se request bhejo/URL open kiya tb request aayi.
 * 
 * Note : Ab hum dkhnge request k basis pr response kaise send krnge
*/
