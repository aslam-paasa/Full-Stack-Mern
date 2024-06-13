/**
 * Q. What is Process?
 * => process is an object provides information about, and control over, the current
 *    Node.js process.
 * 
 * => Node k andr by-default ek special object hota hai called as "process". Avi jo
 *    kaam chl rha hai Node JS k andr, ye object humein usse related information 
 *    provide krti hai. Aur agar uss information m agar hm kuch changes krna chahte
 *    hai, kuch manipulation krna chahte hai to hm "process" object ko use krte hai.
*/


/**
 * Q. How to use this "process" object?
 * => Is object k andr kaafi saare special methods and properties hote hai jo humein
 *    allow krte hai input lene k liye, output dene k liye, current working directory
 *    jaisi chije, ya memory related information ko hm access krna chahte hai to hm
 *    uske liye "process" object ko use krte hai.
 * */


/**
 * Q. How to access "process"?
 * => Inside Node Command Line : 
 *      1) node : to switch CMD to Node 
 *      2) process : to access process (can access methods & properties)
 *           (a) process.release : to see release related information
 *           (b) process.cwd : to see current working directory
 *           (c) process.argv : ye humein ek array return krta hai, aur agar hum isse
 *               print krwae : [ 'C:\\Program Files\\nodejs\\node.exe' ]
 *               => Ye humein ek array de diya aur array k andr single value mujhe dikh
 *                  rha hai. To Node REPL k andr hm isse access nhi krte.
 *               => Hum apne "script" k andr "console.log(argv)" kre to :
 *                    (i) process.argv : returns an array containing the command-line arguments passed
 *                        when the Node.js process was launched.
 *                        
 *                      console.log(process.argv);
 *                      [
 *                      'C:\\Program Files\\nodejs\\node.exe',
 *                      'C:\\Users\\aslam\\OneDrive\\Documents\\GitHub\\NodeJS\\01-Node\\03-Process-In-Node.js'
 *                      ]
 * 
 *               => To by default process.argv m jb humne koi argument pass nhi kiya, means 
 *                  normally jb hm apne file ko run krte hai to by default iske andr 2 values hoti
 *                  hai.
 *                       (a) Executable Path for Node
 *                       (b) File location jaha pe humaara JS Code run kr rha hai
 * 
 *               => Isme hm files ko v kuch kuch arguments pass kr skte hai : node 03-Process-In-Node.js hello bye
 *               => To "hello" & "bye" ye 2 arguments h jinko hum pass kr rhe hai file ko run krte 
 *                  time. Aur iss baar jb hm isse run krnge to 4 values print hogi :
 *                  [
 *                      'C:\\Program Files\\nodejs\\node.exe',
 *                      'C:\\Users\\aslam\\OneDrive\\Documents\\GitHub\\NodeJS\\01-Node\\03-Process-In-Node.js',
 *                      'hello',
 *                      'bye'
 *                  ]
 * 
 *               => Hum aur v kaafi saari values pass kr skte hai : node 03-Process-In-Node.js hello bye shradha apnacollege 52
 *                  [
 *                      'C:\\Program Files\\nodejs\\node.exe',
 *                      'C:\\Users\\aslam\\OneDrive\\Documents\\GitHub\\NodeJS\\01-Node\\03-Process-In-Node.js',
 *                      'hello',
 *                      'bye',
 *                      'shradha',
 *                      'apnacollege',
 *                      '52'
 *                  ]
 * 
 *               => Aur ye saari individual values humaare array k andr aa jaegi qki ye saare
 *                  humaare arguments h jisko hm use kr skte hai.
 * 
 *                     
*/

/**
 * Q. In saare arguments ko humein code k andr use krna hai to kaise kr skte hai?
 * => Ek loop lga skte hai, aur jitne v arguments h unko hum "args" naam k array k
 *    andr store kr lenge aur loop chala denge.
 * => Starting k 2 values ko hum ignore krna chahte hai.
 * => And let's suppose humare ye jo file hai ye bahut saare logo k naam input
 *    leta hai aur humein unn saare logo ko hello bolna hai :
*/

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello & welcome ", args[i]);
}

// Input : node 03-Process-In-Node.js aslam danish afzal mustafa abdullah

// Output :
// hello & welcome  aslam
// hello & welcome  danish
// hello & welcome  afzal
// hello & welcome  mustafa
// hello & welcome  abdullah