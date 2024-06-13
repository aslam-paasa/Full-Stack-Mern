/**
 * NodeJS :
 * 
 * Q) What is NodeJS?
 * Q) Why do we actually need it?
 * Q) What are the capabilities of NodeJS?
 * 
 * => Most probably we must have interacted with JS inside Browsers.
 * => In browsers there are lot of functions that are available like document.getElementById().
 * => These kind of functions we have executed using JS in order to manipulate our DOM.
 *    Or we might have used fetch() request to download some data etc. All of these
 *    features we might be already about. But if we search any of these functions in 
 *    the official documentation of JS released by ECMAScript, we won't find any.
 *    Because JS in itself is not that powerful that it can also manipulate things on
 *    browser, download some data etc.
 * 
 * => But there is a concept of runtime. JS runs inside a runtime. 
 * => This runtime provides a lot of resources in terms of memory, architecture,
 *    lot of external functions using which the capability of JS is enhanced.
 *    Enhanced in terms of? JS gets access to a lot of runtime based features.
 * 
 * => For example, what browsers do? Browser can actually render html for us.
 *    JS gets a functionality using which it can manipulate HTML for us.
 * 
 * => Apart from that, it gets capability around downloading some data, executing a
 *    timer. If we see there is no functionality of executing a timer directly in JS,
 *    but due to the intervention of runtime, runtime provides a lot of resources in
 *    terms of memory, architecture etc. using which the capability enhanced. So, 
 *    runtime provides these kind of functions or APIs that JS has access to and then
 *    it can actually use it.
 * 
 * => Runtime is like a parents that we have. When we are small baby, we need parents
 *    to help us in lot of things. Similalry, runtime is required for JS to help JS
 *    in a lot of things.
 * => The reason why JS is so versatile and has got so many applications is due to
 *    these runtimes actually. 
 * 
 * => Browser is also a runtime. Chrome, Edge etc are browsers which act as runtime. 
 *    Every browser is different runtime, that is why we can see some feature supported
 *    in one browser and some feature might not be supported in some browser because
 *    all these browsers are separate entity all together. These are separate from JS.
 *    But most of these browsers provide similar set of APIs/functionality and when
 *    we actually run JS inside these runtime then all of these capabilities are given
 *    to JS.
 * 
 * => Now if we are already aware about how JS handle asynchronous task then we might
 *    be already aware about something like event loop, macrotask queue (callback queue),
 *    All of these memory architectural changes are also provided by runtime. If runtime
 *    doesn't support it then maybe we won't be able to use all of these features in JS.
 *    So, runtime provides a lot of features to JS using which the versatility of the
 *    application of JS is so huge, starting from mobile, web app, server side, machine learning. 
 * 
 * => For a very long period of time the only runtime that existed for JS was browsers.
 *    Then most of the features are revolving around browsers. So, in 2009, a person
 *    named Ryan Dahl launched "NodeJS" runtime (not framework). Ryan Dahl extracted
 *    Core JavaScript functionalities out of the browser runtime and they setup and 
 *    whole new runtime all together called NodeJS which enabled us to run JS directly
 *    inside our terminal means we are able to run directly inside our shell and this
 *    this shell can help us directly interact with a lot of OS features. For example,
 *    using the terminal we can go to a file, create a file etc. Technically by being
 *    able to run JS outside of a browser and inside of a terminal helped us to give
 *    all of this functionalities to JS. The browser based JS cannot read our file
 *    system but JS running inside NodeJS(terminal) can, we can also create a file,
 *    update a file, delete a file etc, means we can do all types of file manipulations
 *    in JS.
 * 
 * => Because it is different from browser, browser based functionalities won't exist,
 *    because NodeJS help us to run JS inside terminal and inside terminal we don't
 *    have any html. So, there is no point of having DOM.
 * 
 * => It removes all irrelevant APIs that are now not required for us to interact to
 *    the system, and provides some new set of functions and API that are going to be
 *    more relevant like CRUD of file.
 * 
 * => Thats' why a lot of time when we run JS file using VS Code, we always see the
 *    Command Line starts with - 'node'. So, when we actually run a JS file in VS Code
 *    it is not running inside a browser. It is running on a file and we actually
 *    load the file in the RAM manually and do everything that means we are actually
 *    running our JS file in Node Environment.
 * 
 * Note: Some more runtime environments : Deno, Bun
 * 
*/

/**
 * Features of NodeJS :
 * 1. Open Source 
 * 2. Brings raw JS features into our terminal so that we can actually interact
 *    with OS based features.   
*/

/**
 * Q. What is the difference between runtime & framework?
 * => Runtime is actually an environment that provides resources for a particular
 *    programmer processed to run. 
*/

/**
 * Using NodeJS we can make :
 * (a) Server Side Apps
 * (b) Desktop apps
 * 
 * NodeJS gives access to :
 * (c) IOT
 * (d) File System
 * (e) processes & runtime variables
*/

/**
 * Input Output (IO) :
 * => IO Operations in our computer are kind of expensive. Let's say there is a process
 *    running on and there is an input expected from an end user. End user can give
 *    input immediately or they take 5 minutes to give the input. So, when we are
 *    giving an output, we might have to send a signal to a printer.
 * 
 * => How fast the printer is working depends on what fast we are able to give the 
 *    output. So, IO is one of the most expensive operation that exist inside our PC.
 *    
*/

/**
 * Implementation of IO can be of two types :
 * (a) Blocking IO
 * (b) Non-blocking IO
 * 
 * => Blocking IO means let's say on a particular thread we are executing a process
 *    and that particular process went for taking some input from user. This thread
 *    is actually blocked until or unless we are coming back from end user and 
 *    started executing the remaining steps. That means if we want to do something
 *    parallely, we might have to triggers multiple threads at the same time.
 * 
 * => Whereas this is not the case with non-blocking IO. Non-blocking IO handles 
 *    thing in a very different way. It doesn't handle thing with a single thread 
 *    that if there will an IO Operation then the whole thread will be blocked.
 *    That's now how things happens. So, non-blocking IO architecture we already
 *    know since Async JS (setTimeout).
*/

/**
 * => We have learnt the architecture that there is a set of queues that exist,
 *    there is something called as event loop then there is something called as
 *    runtime which actually executes our features and then from our actual piece
 *    of code we trigger the runtime, meanwhile behind the scenes the event loop is 
 *    running, if the runtime completes its feature and there is still something going
 *    on in the program, it is going to park its callback inside the queues.
 *    
 * => On the same mechanism non-blocking IO works.
 * 
 * => So, in NodeJS there is also something called as Event Loop. There are a bunch
 *    of queues that we can maintain. 
*/

// 48:11