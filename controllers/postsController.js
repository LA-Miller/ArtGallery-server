const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { PostModel } = require("../models");


// GET ALL POSTS OF AN INDIVIDUAL USER
router.get("/", validateJWT, async(req, res) => {
    const { id } = req.user;
    try {
        const userPosts = await PostModel.findAll({
            where: {
                owner_id:id
            }
        })
        res.status(200).json(userPosts);
    } catch(err) {
        res.status(500).json({ error: err });
    }
})

// DELETE INDIVIDUAL LOG OF A USER
router.delete("/:id", validateJWT, async(req, res) => {
    const ownerId = req.user.id;
    const postId = req.params.id;
    
    try {
        const query = {
            where: {
                id: postId,
                owner_id: ownerId
            }
        }

        await PostModel.destroy(query)
        res.status(200).json({ message: "Art Entry Removed" });
    } catch(err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;

