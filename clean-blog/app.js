const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {});
const app = express();
const Post = require('./models/Posts');
const indexController = require('./controllers/Index/indexController');
const postController = require('./controllers/Posts/postController');
// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);
// app.use(express.json());

app.get('/', indexController.viewHomePage);
app.get('/about', indexController.viewAboutPage);
app.get('/add', indexController.viewAddPostPage);
app.get('/post/edit/:id', indexController.viewEditPostPage);


app.post('/add-post', postController.createPost);
app.get('/post/:id', postController.readPost);
app.put('/post/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portu üzerinde ayağa kalktı`);
});
