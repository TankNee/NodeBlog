/**
 * @Description: 文章路由
 * @Author: TankNee
 * @Date: 3/8/2020 9:44 AM
 **/
const jsonResponse = require("../../lib/jsonResponse");
const express = require("express");
const router = express.Router();
const articleService = require("../../services/articleService");
const paramHelper = require("../../lib/paramHelper");
router.get("/", (req, res, next) => {
    /**
     * id article primary key
     * pageNum page number
     * pageSize the number of articles in single page
     */
    let { slug, pageNum, pageSize } = req.query;
    if (paramHelper.isNullOrEmpty(slug)) {
        articleService
            .getArticleList(parseInt(pageNum), parseInt(pageSize))
            .then((result) => {
                if (result) {
                    res.json(jsonResponse.success(result)).end();
                } else {
                    res.json(jsonResponse.fail(null, "文章列表不存在", 604)).end();
                }
            })
            .catch((err) => {
                res.json(jsonResponse.fail(null, err, 605)).end();
            });
    } else {
        articleService
            .getArticleDetailBySlug(slug)
            .then((result) => {
                if (result) {
                    res.json(jsonResponse.success(result)).end();
                } else {
                    res.json(jsonResponse.fail(null, "文章不存在", 604)).end();
                }
            })
            .catch((err) => {
                res.json(jsonResponse.fail(null, err.message, 605)).end();
            });
    }
});

module.exports = router;
