NodeJS :
-> It is a JS runtime environment.
(JS Browser m chalane k liye banayi gyi thi. Aur JS ko iss liye chalane k liye banayi gyi thi ki humari websites ko dynamic krna tha isliye JS Scripting banayi gyi thi jo humare browser m kaam kre aur humare website ko dynamic banaye. Fir dekha gya ki JS aur v tarike se kaam kr skte hai, pehle JS sirf browser m chlti thi, fir kisi ko khyal aaya ki agar hm JS ko use kr k usko apne normal laptop m chala paye like apne compilers m chala paye to kya hoga? To fir Rohl Dahl ne NodeJs banayi (2009).
Humein pta hai Chrome m JS Engine h uska naam h V8, aur V8 n andr JS chlti hai. To iss insaan ne kya kiya, ek compiler h jiske andar V8 engine daala aur isko ek environmental package kr diya aur humari NodeJS born ho gyi.
V8 is written in C++, aur ye C++ m likhi hui h, isi wajah se JS itni fast hai. Qki C++ ko pta h ki sbse jldi execution C++ ka hota hai fir uske baad Java ka hota hai fir Python ka hota hai)

Note : JS pehle sirf Browser m run krwa skte the but NodeJS ka wajah se ab hum VS Code Editor m etc m run krwa skte hai.

Official Definition of NodeJS -
-> NodeJS is a non-blocking Input-Output model, event driven i.e. why it is efficient.
(Non-Blocking Input-Output Model -
-> JS jo h wo Chrome k V8 Engine pe bani hui hai means uska runtime environment V9 ka h to usi pe humari NodeJS bani hui h.
-> IO means Input-Output - means koi Input maangega humse aur hum usko output denge, wo kuch v ho skta hai like reading, writing, local files, koi server ko request maarna, database se kuch mangwana etc. NodeJS/mere code ne hmse kuch Input maangta hai to maine wo input dene m kuch time lagaya, fir wo jo output laane m kuch time lagaya, tbtk humara code ideal pada rehta hai aur aage ki line execute ni kr paata qki during processing codes block ho gye, aur usse Blocking Input-Output Model bolte hai. So, non-blocking input-output model is just opposite, to usme jb input dete h na to usme aisa ni hoga ki output jb aaega tabhi aage ki code chalegi, hm code chalate rhnge fir jb humne jo request ki thi uska result/output aa jaegi to wo hm show kr dnge.)
Note : Non-Blocking h so ye Asynchronous kaam krti hai -> means jo chij sync m ni hoti. Aur NodeJs isliye banayi gyi thi jiske help se hum server bana sake. Ab server m humare jaise hazaaro log hai jo website pe access krte hai. Agar humari server synchronous hogi to jbtk ek ki request process ni hogi tbtk agle ki request ni lega isliye Ascynchronous banayi gyi -> waiting time km ho gyi -> iss hm kehte hai 'event loop'.

Example of Non-Blocking :
Table-1 : 3 dish
Table-2 : 1 dish
Table-3 : 5 dish
Waiter ne table-1 ki order li, then chef ko diya. Fir table 2 ki order li then chef ko diya -> means asynch m kaam ho rha h. Aisa ni hua ki pehle Table-1 ki saari dish banegi fir Table-2, Table-3 ki order li jaegi. Chef sbki dish ek saath bana rha, Table-1 ki ek dish server hogi, then maybe table-3 ko ek dish serve ho, aur wo dinner continue krnge fir aise aise kr k dish aate jaenge. But chef agar ek baar m ek table ki dish banata ho 2 table k customer loose kr deta. That is non-blocking, ek ki kaam process m ho rhi, aur usi time agle ki order le rhe.

-> Event Driven - means kuch v humare app k andar ho aur uska hum respond kr pae. So, kuch kaam hoga aur usko hum respond krnge.
Events are of two types :-
(a) System Event 
(b) Custom Event : Custom Event wo hota hai jisme event hum khud likhte hai. 


Node Modules :
-> Node JS k saath kuch in-built modules/packages(function libraries) aate hai aur wo modules humari help krte hai day-to-day task perform kr ske. (Heavy File)
-> Aisa jaruri nai ki jo humein chaiye wo isme ho, aisa ho skte hai humein jisko jarurt h wo isme nai ho, tb humare paas aata h 'npm' -> Node Package Manager. Ye 'Node Package Manager' ye krta h ki jo v new functionalities humein chaiye node k andar wo saare module hote hai, ab wo bahar se v kuch module install krnge like 'lodas' module -> ye kuch kuch functionalities provide krte hai lekin ye functionalities Node Modules k andar nai hote hai aur jo npm k andar packages hote hai ye hum khud v likh skte hai for example humein lgta h ki aisa koi package nai hai jo mujhe random number de de, wo basically ye packages open source h, qki ek developer ne functionalities likh k package banayi aur usse koi v use kr skte hai.


## fs -> file system module
-> Ye humein humare files read krne m aur unse cherkhani krne m kaam aata h 
-> Node JS is by default Asynchronous, lekin iske andr asynchronous and synchronous dono methods available hote h.
-> To hum pehle Synchronous methods sikhnge fir Asynchronous methods sikhnge

Note : Make a crisp note of 'fs' module -

Note : Make a crisp note of 'path' module -

1:30:29 - 18 Closures
RemoteJobs->
FLEXJOBS
Arc
REMOTE.CO
JUSTREMOTE
VIRTUAL VOCATIONS
PANGIAN
WE WORK REMOTELY
REMOTIVE
SKIP THE DRIVE
REMOTE OK
WORKING NOMADS
JOBSPRESSO
EUROPEREMOTELY
OUTSOURCELY
POWERTOFLY
LANDING.JOBS
AUTHENTIC JOBS
DRIBBBLE
DRIBBBLE
CAREER VAULT
Toptal
Jobgether
FIVERR
UPWORK
FREELANCER.COM
FREELANCERMAP.COM
GUN.IO
THE MUSE
INDEED
CAREER BUILDER
IDEALIST