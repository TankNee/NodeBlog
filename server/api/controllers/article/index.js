/**
 * @Description: 文章路由
 * @Author: TankNee
 * @Date: 3/8/2020 9:44 AM
 **/
const jsonResponse = require("../../lib/jsonResponse");
const express = require("express");
const router = express.Router();
const articleService = require('../../services/articleService');
router.get("/", (req, res, next) => {
    articleService
        .getArticleList(1, 20)
        .then((result) => {
            if (result) {
                res.json(jsonResponse.success(result)).end();
            } else {
                res.json(jsonResponse.fail(null, "???????", 604)).end();
            }
        })
        .catch((err) => {
            res.json(jsonResponse.fail(null, err, 605)).end();
        });
    // res.json(jsonResponse.success({ data: "Hello World" })).end();
});

module.exports = router;
