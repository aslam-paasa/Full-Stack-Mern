/**
 * Library Vs Framework :
 * 
 * 1. Library:
 * => A library is a collection of pre-written code that can be used to perform
 *    specific tasks.
 * => Example : Axios : send request to API
 * 
 * 2. Framework:
 * => A framework is a set of pre-written code that provides a structure for developing
 *    software applications.
 * => Example : ExpressJS : defines overall code structure
*/

/**
 * Q. What is an API?
 * => An API is a set of definitions and protocols for building and integrating software. 
 *    It's sometimes referred to as a contract between an information provider and an 
 *    information user - establishing the content required from the consumer(the call) and
 *    the content required by the producer(the response). 
 * => For example, the API design for a weather service could specify that the user supply
 *    a zip code and that the producer reply with a 2-part answer, the first being the high
 *    temperature, and the second being the low.
 * => In other words, if you want to interact with a computer or system to retrieve information
 *    or perform a function, an API helps you communicate what you want to that system so it
 *    can understand and fulfill the request.
 * => You can think of an API as a mediator between the user or clients and the resources or 
 *    web services they want to get. It's also a way for an organization to share resources and
 *    information while maintaining security, control and authentication - determining who gets 
 *    access to what.
 * 
 * 
 *    +-----------------+-----+       +-----------------------+
 *    | Backend Systems | API |<=====>| API Management System | <===== (a) Apps
 *    +-----------------+-----+       +-----------------------+        (b) IOT Devices
 *                                                                     (c) Mobile
 *    
*/

/**
 * Express JS:
 * => A Node.js web application framework that helps us to make web applications.
 * => It is used for "server" side programming.
 * => It is used to build a single page, multipage and hybrid web application.
 */

/**
 * Features of Express JS:
 * 1. Middleware: It is a request handler that has access to the application's request-response cycle.
 * 2. Routing: It refers to how an application's endpoint's URLs respond to client requests.
 * 3. Templating: It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.
 * 4. Debugging: Express makes it easier as it identifies the exact part where bigs are.
 */ 

/** 
 * Major use cases of Express:
 * 1. "Listen for incoming requests" : Means incoming jitni v requests aa rhi ho
 *    chahe wo GET, POST, PUT, DELETE request ho ye unn sb ko listen krta hai
 *    means sunta hai ki request kb aaegi.
 * 
 * 2. "Parse the requests" : Jaruri nhi ki request m kis tarah ka data aaega
 *    lekin Express uss data ko node.js/javascript k hisaab se parse karta hai.
 * 
 * 3. "Match response with routes" : Generally jb hum websites ko use krte hai
 *    to kabhi kabhar humne likhe hai "google.com", to iss link k baad hum
 *    likh dete hai "google.com/search", iss tarikes se "/" k baad wala jo v
 *    naam likha hota hai usko hm route bolte hai programming mai. So, route
 *    means alag alag raaste jinme hum request bhej skte hai. Aur request actually
 *    kn se path pe aayi hai uss path ko request k saath match krne ka kaam v
 *    express krta hai.
 * 
 * 4. "response" : Suitable response kiss tarah se send kiya ja skta hai wo v
 *    express krta hai
*/

