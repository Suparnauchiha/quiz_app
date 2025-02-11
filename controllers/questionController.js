// importing npm modules
const Express = require("express");
const Post = require("../models/posts");
const router = Express.Router();

// querying all the posts on homepage
router.get("/",async (req,res)=>{
    const posts = await Post.find();
    console.log("Request for all posts");
    res.json(posts);
})

// querying posts of a specific category
router.get("/:category",async (req,res)=>{
    const posts = await Post.find({category: req.params.category});
    console.log("Request for posts of category: "+ req.params.category);
    res.json(posts);
})


// for handling post requests and pushing it to the MongoDB database
router.post("/", async (req,res)=>{
    console.log("Post request for :" + req.body);
    const post = new Post({
        id: req.body.id,
        category: req.body.category,
        question: req.body.question,
        answer: req.body.answer
    });
    const savePost = await post.save().then(data =>{
        res.json(data);
    }).catch(err=>{
        res.json({message: err});
    })
})


// Route to delete all the posts
router.delete("/",(req,res)=>{
    Post.deleteMany({}, function (err) {
        if (err) return handleError(err);
      });
    res.send("All posts deleted!");
})

// Route to delete a specific post by id
router.delete("/:id",(req,res)=>{
    Post.deleteOne({id: req.params.id}, function(err){
        if(err) return handleError(err);
    })
    res.send(`post ${req.params.id} deleted!`);
})


module.exports = router;
