/**
 * @Description: 文章服务层
 * @Author: TankNee
 * @Date: 3/6/2020 8:19 PM
 **/
const Article = require('../database/models/article');
// const commentUtils = require('../utils/CommentUtils');
/**
 * 获取文章列表
 * @param pageNum 页码
 * @param pageSize 每页多少条
 * @returns {Promise<unknown>}
 */
const getArticleList = (pageNum, pageSize) => {
    return new Promise((resolve, reject) => {
        Article
            .findAndCountAll({
                order:[['created','DESC']],
                offset: (pageNum - 1) * pageSize,
                limit: pageSize
            }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * 添加文章
 * @param article
 * @returns {Promise<unknown>}
 */
const addArticle = (article) => {
    return new Promise((resolve, reject) => {
        Article
            .create(article).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * 获取文章内容
 * @param id
 * @returns {Promise<unknown>}
 */
const getArticleDetail = (id) => {
    return new Promise((resolve, reject) => {
        Article
            .findOne({
                where: {
                    id: id
                }
            }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * 通过缩略名获取文章
 * @param {string} slug 
 */
const getArticleDetailBySlug = (slug) => {
    return new Promise((resolve, reject) => {
        Article
            .findOne({
                where: {
                    slug: slug
                }
            }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * 更新文章
 * @param article
 * @returns {Promise<unknown>}
 */
const updateArticle = (article) => {
    return new Promise((resolve, reject) => {
        Article
            .update(article, {
                where: {
                    id: article.id
                }
            }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * 删除文章
 * @param id
 * @returns {Promise<unknown>}
 */
const deleteArticle = (id) => {
    return new Promise((resolve, reject) => {
        Article
            .destroy({
                where: {
                    id: id
                }
            }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};
// const getTimeLineItems = (pageNum, pageSize) => {
//     return new Promise((resolve, reject) => {
//         Article
//             .findAll({
//                 offset: (pageNum - 1) * pageSize,
//                 limit: pageSize,
//                 order: [
//                     ['created', 'DESC']
//                 ]
//             }).then(res => {
//             commentUtils.getLatestComments(pageNum, pageSize).then(comments => {
//                 let timelineItems = [];
//                 res.forEach(article => {
//                     article.created = article.created * 1000;
//                     timelineItems.push(article);
//                 });
//                 comments.forEach(comment => {
//                     comment._serverData['created'] = comment.createdAt.getTime();
//                     timelineItems.push(comment._serverData);
//                 });

//                 timelineItems.sort(function (a, b) {
//                     return -(parseInt(a.created) - parseInt(b.created));
//                 });
//                 resolve(timelineItems);
//             });
//         }).catch(err => {
//             reject(err);
//         });
//     });
// };
exports.getArticleList = getArticleList;
exports.addArticle = addArticle;
exports.getArticleDetail = getArticleDetail;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
exports.getArticleDetailBySlug = getArticleDetailBySlug;
