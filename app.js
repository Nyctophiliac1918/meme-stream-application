const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://@cluster0.br9bq.mongodb.net/blogDB?retryWrites=true&w=majority', {
  user: "admin-prawar",
  pass: "0zhPz2qMLCN8T34H",
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

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
      console.log(meme);
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

  console.log('h');
  console.log(req.body);
  
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
      console.log(meme);
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

        // console.log(postk._id);
        // console.log(typeof(postk));
        if(postk._id == reqID){
          
          console.log(postk);
          flag = true;
          return res.send(postk);
        }
      })
    }
  })

  // res.send('not found');
})

app.listen(process.env.PORT || 8081, function(){
  console.log('Server started at Port 8081:');
})

