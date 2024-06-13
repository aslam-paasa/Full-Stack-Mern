/**Creating RESTful APIs :
 * 
 * Q. Basic layout ki humein kn kn si APIs create krni hai?
 * => Humaare backend k paas functionality honi chaiye taaki wo alag alag type k
 *    request ko handle kr sake.
 *    1. GET      /posts               to get data for all posts (Index Route) 
 *    2. POST     /posts               to add a new post (Create Route)
 *    3. GET      /posts/:id           to get one post(using id) (View Route)
 *    4. PATCH    /posts/:id           to update specific post (Update Route)
 *    5. DELETE   /posts/:id           to delete specific post (Destroy Route)
*/


/**Steps:
 * 1. npm init
 * 
 * 2. npm install express
 * 
 * 3. npm install ejs
 * 
 * 4. Create folder public, views
 *     => Views : EJS file(templates), CSS
 * 
 * 5. Require path in 04-index.js :
 *     => const path = require('path');
 * 
 * 6. Set view engine 
 *     => app.set('view engine', 'ejs');
 * 
 * 7. Set path for views
 *     => app.get('views', path.join(__dirname, 'views')); // __dirname is directory name
 * 
 * 8. Set path for public folder 
 *     => app.get(expresss.static(path.join(__dirname, 'public')));
 * 
 * Note: Jb v post request se hum apne form se koi data bhejte hai ya koi new data aaega
 *       server k paas to usse parse nhi kr paega
*/

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.set('view engine', 'ejs');
app.get('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log("listening to port : " + port);
})