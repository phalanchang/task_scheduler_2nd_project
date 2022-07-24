const actionName = require('../../constants/action-name-constantas');
const viewName = require('../../constants/view-name-constants');

exports.call = (app) => {
    app.get(actionName.INDEX, function (req,res) {
        console.log('called index page');

        var param = {};
        param.res = {};
        // param.res.urlInfo = req.session.userInfo;
        
        // 画面
        (async function() {
            try {
                res.render(viewName.INDEX, param)
            } catch (error) {
                console.log("error")
                console.log(error)
            }
        })();
    });
}