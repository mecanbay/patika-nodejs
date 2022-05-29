const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {});
const app = express();
const Post = require('./models/Posts');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});

app.get('/add', (req, res) => {
  res.render('add_post');
});

app.post('/add-post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portu üzerinde ayağa kalktı`);
});
