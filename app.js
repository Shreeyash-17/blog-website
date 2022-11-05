
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash")
const port=process.env.PORT || 3000  ;

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts=[];
// var titles=[];

app.get("/",(req,res)=>{
  const user={
    item1:homeStartingContent,
    item2:aboutContent,
    item3:contactContent,
    item4:posts
  }
  res.render("home",{user});
})


app.get("/about",(req,res)=>{
  const user={
    item1:homeStartingContent,
    item2:aboutContent,
    item3:contactContent
  }
  res.render("about",{user});
})

app.get("/contact",(req,res)=>{
  const user={
    item1:homeStartingContent,
    item2:aboutContent,
    item3:contactContent
    
  }
  res.render("contact",{user});
})

app.get("/compose",(req,res)=>{
  
  res.render("compose");
})

app.post("/compose",(req,res)=>{
  let p=req.body.newtitle;
  const post={
    title:req.body.newtitle,
    content:req.body.newpost
  }
  // titles.push(req.body.newtitle);
  posts.push(post)

  // console.log(p);
 // res.render("compose");
 res.redirect("/");
})


app.get("/posts/:name",(req,res)=>{
  // if(posts[posts.length.title]===req.params.name)
// console.log(posts[(posts.length-1).title]);

for(i=0;i<posts.length;i++)
{
  if(_.lowerCase(req.params.name)==_.lowerCase(posts[i].title))
   {
     console.log("Matching found");
    const content={
      title1:posts[i].title,
      content1:posts[i].content
    
    }
   res.render("post",{content})

  }

}
  console.log("Matching found");

  // else
  // console.log("Matching not found");

  // res.send("pos");
})



app.listen(port, function() {
  console.log("Server started on port 3000");
});
