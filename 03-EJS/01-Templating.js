/**
 * Templating:
 * => Templates humaare layouts hote hai, jaise humne resume template ki
 *    already baat kr rkhi hai, agar humaare paas resume k ek layout aa
 *    jae to usme hum v apna information bhr k apna personal resume bna
 *    paenge, aur durse log v usme information bhr k wo apne personal
 *    resume bna paenge. To iss tarah se template humare fixed layouts
 *    hote hai jinse multiple results aa skte hai agar usme information
 *    bhar di jae.
 *  => For example, ":/username" -> ye path param iss tarike se kaam krta
 *     hai ki usme ek variable aa jaata hai aur iss variable name m
 *     humne ":/username" k jagha ":/apnacollege" likha to humaare variable
 *     k andr apnacollege aa jaega. So, basically ye ek template h jisse
 *     hm alag-alag routes ko create kr skte hai.
 * => Similarly, humaare poore page ko create krne k v templates hote hai.
 * => Note: Jb v website m koi layout baar baar use hota hai to hm uska 
 *    template bna k use krte hai. Template ko hm ek blueprint k tarah
 *    samajh skte hai, jiske kr baar bnana pdta hai lekin uski copies
 *    multiple baar niklti hai. Aur iske liye hm "templating" ko use
 *    krte hai, jo automatic user k hisaab se template create krte rhe.
 *
 * => Templating ko achieve krne k liye multiple tools hote hai:
 *    (a) Pug
 *    (b) Mustache
 *    (c) EJS [we are going to use]
 *    (d) Jade
 *    (e) dust
 *    (f) handlebars
 *    (g) templayed
 * => Means hm EJS ki help se ek html templates bna paenge jiske andr hm
 *    JS ka logic v likh paenge.
*/


/**
 * Using Template Engines:
 * => Template Engine makes you able to use static template files in your application.
 *    To render template files you have to set the following application setting 
 *    properties:
 *    (a) Views: 
 *        => It specifies a directory where the template files are located.
 *        => For example, app.set('views', './views');
 *        => If the "views" are not set explicitly. Express will look at the "./views" 
 *           directory by default.
 *     (b) view engine:
 *        => It specifies the template engine that you use.
 *        => For example, to use the Pug template engine: app.set('view engine', 'ejs');
 *         
*/


/**
 * EJS:
 * => When quickly creating Node applications, a fast way to template your
 *    application is sometimes necessary.
 * => Jade comes as the default template engine for Express but Jade Syntax
 *    can be overly complex for many use cases.
 * => Embedded JavaScript templates(EJS) can be used an altervative template 
 *    engine.
 * => EJS(Embedded JavaScript Templates)
 * => EJS is a simple templating language that let's you generate HTML
 *    markup with plain JavaScript.
 * 
 * Install:
 * 1. npm init -y
 * 2. npm i express
 * 3. npm i ejs
*/

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});