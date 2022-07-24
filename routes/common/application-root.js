const root = require('../common/root');
const index = require('../index/index-controller');

exports.call = (app) => {
    root.call(app);
    index.call(app);
}