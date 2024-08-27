/**
 * Using EJS:
 * => app.set("view engine", "ejs");
 * 
 * => app.get("/", (req, res) => {
 *       res.render("home.ejs");
 *    });
 * */ 

/**
 * Q. How to use EJS?
 * => EJS ko use krne k liye humne apne code k andr kuch lines likhni
 *    padegi => app.set("view engine", "ejs");
 * => Ye function "view engine" ko set kr dega "ejs" m.
 * 
 * Note: No need to install ejs, it is already built-in inside express.
 * */ 

/**
 * Q. What is the meaning of "view engine"?
 * => "view" means "template".
 * => Wo package jo humaare view/template ko create or render krne k kaam
 *    aaega wo humara ejs hone wala h.
 * => EJS k help se hum request ko send nhi krte, hum request ko render krte hai.
 * => Agar humein html ko bhjna hota h in the form of a file, uske liye we use
 *    response.render().
 * => Aur render() k andr hm apni EJS File ko bhjte hai.
 * */ 

/**
 * Let's create an EJS File:
 * 1. First create views folder.
 * => Ab by default jb v hm express k andr "view engine" ko use krte hai to, 
 *    view engine expect krta hai ki humare jitne v views/templates hai wo saare
 *    ek "views" naam k folder m hone chaiye.
 * => By default express isi "views" naam k folder ko dhundega templates ko render
 *    krne k liye.
 * Note: Hum views folder ka naam change kr k kuch aur v rakh skte hai.
 * 
 * 2. Create template: home.ejs
 * => Iske andr hm HTML+JS ka ek mix code likhnge in the form of template.
 * 
 * 3. res.render():
 * => res.send() k jagha hum res.render() krnge, aur render k andr hum apni
 *    EJS file name likhnge.
 * 
 * 4. const path = require('path');
 *    app.set("views", pathjoin(__dirname, "/views"));
 * => Hum kahi v rahe lekin humara express ab isi folder m ejs dhundega
 * => Hum ejs path fix kr diya hai.
*/

const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", pathjoin(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});