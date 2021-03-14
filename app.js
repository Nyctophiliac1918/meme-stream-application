const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const dotenv = require("dotenv")
// const findOrCreate = require('mongoose-findorcreate');
dotenv.config()

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.eqa6r.mongodb.net/xmemeDB", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useCreateIndex', true);

const postSchema = new mongoose.Schema({
  name: String,
  caption: String,
  url: String,
  time: String,
  date: String
})

// postSchema.plugin(findOrCreate);

const Post = new mongoose.model('Post', postSchema);

app.get('/', function(req, res){
  res.render('home');
})

app.post('/', function(req, res){

  var d = new Date();

  const meme = new Post ({
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url,
    time: d.toLocaleTimeString(),
    date: d.toLocaleDateString()
  })

  meme.save(function(err){

    if(err){
      console.log(err);
    }
    else{
      res.redirect('/posts');
    }
  })
  
})

app.get('/posts', function(req, res){

  Post.find(function(err, results){

    if(err){
      console.log(err);
    }
    else{
      res.render('posts', {meme: results});
    }
  })

})

app.get('/memes', function(req, res){

  Post.find(function(err, result){

    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  })
  
})

app.post('/memes', function(req,res){
  
  var d = new Date();

  const meme = new Post ({
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url,
    time: d.toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"}),
    date: d.toLocaleDateString("en-US", {timeZone: "Asia/Kolkata"})
  })

  meme.save(function(err){

    if(err){
      console.log(err);
    }
    else{
      res.redirect('/posts');
    }
  })

})  

app.get('/memes/:id', function(req, res){

  var flag = false;
  Post.find(function(err, result){

    // const reqID = JSON.stringify(req.params.id);
    const reqID = req.params.id;

    if(err){
      res.send(err);
    }
    else{
      result.forEach(function(postk){
        if(postk._id == reqID){
          flag = true;
          return res.send(postk);
        }
      })
    }
  })
})

app.listen(process.env.PORT || 8081, function(){
  console.log('Server started at Port 8081:');
})

