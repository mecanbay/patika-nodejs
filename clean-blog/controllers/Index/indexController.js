const Post = require('../../models/Posts');


exports.viewHomePage = async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
};

exports.viewAboutPage = (req, res) => {
  res.render('about');
};

exports.viewAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.viewEditPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', {
    post,
  });
};
