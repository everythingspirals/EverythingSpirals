var Post = require("../models/posts.js");

module.exports = function (router) {
  
  //Index
  router.get("/", function(req, res, next){
    res.render('portfolio');
  });

  //Posts
  router.get("/posts", function(req, res, next){
    var posts = Post.find(function (err, posts) {
      if (err) return console.error(err);
      res.render('posts', {
        posts:posts,
        path:req.path
      });
  });
});

  //Experiments
  router.get("/experiments", function(req, res, next){
      res.render('experiments', {
        path:req.path
      });
  });

};
