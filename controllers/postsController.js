const Express = require("express");
const router = require("express").Router();
const { PostModel, UserModel } = require("../models")
const validateJWT = require("../middleware/validate-jwt");


/*
======================
    Create a Post
======================
http://localhost:3000/posts/create
*/
router.post('/create', validateJWT, async (req, res) => {
    const {artist_name, url, description, style, era, for_sale, price} = req.body.art;
    const {id} = req.user;
    const email = req.email;

    const post = {
        artist_name, 
        url, 
        description, 
        style, 
        era, 
        for_sale, 
        price,
        owner_id: id,
        email: email
    }
    try {
        const newPost = await PostModel.create(post);
        res.status(201).json({
            message: 'Post successfully created',
            post: newPost
        })
    } catch (err) {
        res.status(500).json({error:err });
    }

});

module.exports = router;
