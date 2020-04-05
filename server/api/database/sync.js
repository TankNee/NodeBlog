const article = require('./models/article');
const relationship = require('./models/relationship');
const link = require('./models/link');
const meta = require('./models/meta');
const option = require('./models/option');
const user = require('./models/user');
article.sync({
    force: true
});
// relationship.sync({
//     force: true
// });
// link.sync({
//     force: true
// });
// meta.sync({
//     force: true
// });
// option.sync({
//     force: true
// });
// user.sync({
//     force: true
// });

