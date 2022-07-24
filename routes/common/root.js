const actionName = require('../../constants/action-name-constantas');

exports.call = (app) => {
    app.get(actionName.ROOT, function(req, res){
        var param = {}
        param.res = {}
        // param.res.urlInfo = req.session.userInfo;

        res.redirect(req.baseUrl + '/index');
    });
}