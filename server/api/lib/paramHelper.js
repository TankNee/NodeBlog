const _ = require("lodash");

const isNullOrEmpty = (s) => {
    return _.isNull(s) || _.isEmpty(s);
};
module.exports = {
    isNullOrEmpty: isNullOrEmpty,
};
