const express = require('express');
const app = express();
const ejs = require('ejs')


app.use(express.static('public'))
app.set("view engine", 'ejs')


app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/post', (req, res) => {
  res.render('post')
});

app.get('/add', (req, res) => {
  res.render('add_post')
});

const port = 3001;
app.listen(port, () => {
    console.log(`Sunucu ${port} portu üzerinde ayağa kalktı`);
});
