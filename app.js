const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');



const homeStartingContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const aboutContent = "It is said that he lived in this street, and that it was the vestibule of the children. It is said that the vestibulum of the rhoncus is a corporal punishment. It is not just a fancy vestibule. The street was said to be clear of arrows. But you need a smile at the price of what vulputate dignissim has suspended. Let's get into some salad. Always smile in the hendrerit gravida rutrum every one not the land of the orci. He likes the massa vitae tortor sauce lacinia quis or eros. For the earth is the element of the arrows of life. Mauris ultrices eros in the course of the university mass tincidunt dui.";
const contactContent = " Roncus urn is neither cartoon nor basketball. Let us live with the bow of God, let us drink the bow of the cat. It will be followed by the education of the family of the sad family. Risus viverra adipiscing at in the whole land of feugiat. It is not wise to drink the bow of life that is expected from arrows. The result is sometimes a lot of real estate. But now the target is the propaganda lake. Sometimes it is very difficult to put the Internet itself on the customer's attention. For the whole element of the pillow is neither. The pregnant woman was told that there was no clinical placement. Mauris is in some sort of environment as a disease. To put a twister and to always cartoon for free.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];


app.get("/", function(req, res){
  res.render("home", {HomeContent: homeStartingContent, posts: posts});

})

app.get("/about", function(req, res){
  res.render("about", {AboutContent: aboutContent});
})

app.get("/compose", function(req, res){
  res.render("compose");
})

app.get("/contact", function(req, res){
  res.render("contact", {ContactContent: contactContent});
})


//This is Express routing paramter. kissi particular page ke content ko further dekhne ke liye route paramter use karte hai.
// dynamic website banane me kaam aata hai 
// jo : iske baad hai wahi same req.params.postcontent me aayaga
app.get("/posts/:postcontentlink", function(req, res){
 const requestedTitle = _.lowerCase(req.params.postcontentlink);
posts.forEach(function(post){
  const storedTitle = _.lowerCase(post.Title);
  if(requestedTitle === storedTitle){  
  res.render("post", {PostPageTitle: post.Title, PostPageContant:  post.Post})
}

})

})



// Post request
app.post("/compose", function(req, res){
  // Object create isliye kiya taki dono cheezo ko yeek baar me he use kar sake nahi to dono ke aalag const banane padte hai and dono ko aalag aalag call karna padta
  const composeItems =  {Title : req.body.postTitle, Post : req.body.postContent};
  posts.push(composeItems);
  res.redirect("/");
});



app.listen(3000, function() {
  console.log("Successfully hosted at port 3000");
});
