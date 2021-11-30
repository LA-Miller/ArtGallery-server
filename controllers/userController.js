const Express = require("express");
const router = Express.Router();

router.get("/test", (req, res) => {
    res.send("Test route");
});

module.exports = router;