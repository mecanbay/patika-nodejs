const Post = require('../../models/Posts');


exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.readPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
