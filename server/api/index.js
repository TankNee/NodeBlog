const articleRouter = require("./controllers/article");
const jsonResponse = require("./lib/jsonResponse");
const express = require("express");
const router = express.Router();

router.use("/article", articleRouter);
router.get("/", (req, res, next) => {
    res.json(jsonResponse.success(null, "Server available", 100));
    res.end();
});
module.exports = router;
