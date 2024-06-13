/**
 * NPM (Node Package Manager) :
 * => npm is the standard package manager for Node.js
 * 
 * Note: Ye node k packages ka manager hai:
 * 1. It is a library of packages : Package kisi aur ka likha hua aisa code hota
 *    hai jisko hum use kr skte hai. But baaki log kaise use kr paenge? NPM!
 *    So, npm ek library hoti hai jiske andr bahut saari useful packages hoti hai.
 *    Example : ExpressJS, ReactJS etc.
 * 
 * 2. NPM is a command line tool. Mean ye aisa tarika hai jisse hum command line
 *    k through apne packages ko install kr skte hai, hum decide kr skte hai ki
 *    humein kn se package ka kn sa version chaiye, kn se version ko install aur
 *    kn se version ko uninstall krna chahte hai. Basically uss package se related
 *    jitni v information hai un saari information ko manipulate/change krne k 
 *    liye hum apne iss command line tool ko use kr skte hai.
 * 
 * Note : NPM pre-installed aata hai Node k saath.
*/


/**
 * Installing Packages :
 * (a) npm install <- package name ->
 * (b) npm install figlet (example)
*/


/**
 * 1. node_modules : The node_modules folder contains every installed dependency
 *    for your project. Means humaara project jin jin chijo k upar depend krta
 *    hai unko hum  dependency bolte hai. For example, agar humne apne code k
 *    andr koi API ko use kiya hai wo API humaari dependeny bn jaegi, qki agar
 *    wo API kaam krna band kr degi to humaara code hi kaam krna band kr dega.
 *    For example, ReactJS m humne jitna v code likha hai usse reactJs use kr
 *    k hi likha hai, uske baad jb hum ExpressJS use krnge to hmne ExpressJS ko
 *    use kr k code likha hai. But kal agar ExpressJS waha se delete ho jaata hai
 *    to humaara project kaam krna band kr dega, to ye ReactJS or ExpressJS 
 *    humaari code ki dependency bn jaegi. "node_modules" humaari saari ki saari
 *    dependency ko install krta hai.
 * 
 * Note: Jb m hm package install krte hai to node_modules khud bn jaata hai.
 * 
 * 
 * 2. package-lock.json : It records the exact version of every installed dependency,
 *    including its sub-dependencies and their versions. Means jinn v package ko
 *    humne install kiya hai unka exact version kya hai uska record/related
 *    information humaari package-lock.json file store krwati hai.
 * 
 *    Agar dependency ki sub-dependency hai for example, agar kisi ne figlet bnaya
 *    hai to figlet k andr v kuch aur use hua hai means figlet ko ExpressJS use
 *    kr k bnaya hoga to ExpressJS v saath v install ho jaega aur uska version v
 *    saath m install ho jaega.
 * 
 * 3. package.json : The package.json file contains descriptive and functional
 *    "metadata" about a project, such as a name, version, and dependencies.
 *    package.json kaafi similar hoti hai package-lock.json se lekin iss file k
 *    andr "descriptive" & "functional metadata" hota hai project ka. Metadata
 *    means data about data or information about our project like version, author,
 *    release date, dependencies, licence etc. Similarly, hum v jb apni project
 *    bnate hai to humein v project related information deno padti hai like name,
 *    version, author, release date, dependencies, licence etc.
 * 
 * Q. Iska use kya hai?
 * => Let's suppose humne ek project banaya aur ye project kisi aur developer ko
 *    bhejna chahte hai to uss time par humein "node_modules" wali folder kisi aur
 *    ko bhejne k jarurt hi nhi hai means package.json ko already pta hoga kya
 *    kya dependencies install krni hai. 
 * 
 * => Maan lijiye humaare paas package.json hai lekin "node_modules" nhi hai to
 *    kvi v jaa kr hum "node_modules" ko dobara install kr skte hai.
 * 
 * Note: Kl agar github pe hum apni project upload krna chahte hai jiske andr hum
 *       node ko use kr rhe hai, jiske andr different different packages ko
 *       humne use kiya hai, to github k upar jb hum apni project upload krnge tb
 *       sirf hum "package.json" ko upload krnge, hum "node_modules" wale folder
 *       ko upload nhi krnge.
 * 
 * 
 * Q. Kaise install kr skte hai? (Importance of package.json) 
 * => Agar "node_modules" galti se delete ho gya to hum usse dobara se install kr
 *    skte hai. Bss humein likhna hai "npm install" aur "package.json" m jitne v
 *    dependencies honge unko automatically install kr dega.
 * 
 * Q. How to initialize a "package.json" in a brand new project?
 * => "npm init"
*/