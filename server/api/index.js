

const articleRouter = require("./controllers/article");
const express = require("express");
const router = express.Router();


router.get("/", articleRouter);

module.exports = router;

