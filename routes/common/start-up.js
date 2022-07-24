const http = require('http');
const messageConst = require('../../constants/message-constants');
const serverConf = require('../../config/server-setting.json');
const serverConst = require('../../constants/server-constants');

exports.call = (app, express) => {
    const httpAgent = new http.Agent();
    const options = {agent:httpAgent};
    let server = http.createServer(options, app);

    server.listen(serverConf[serverConst.KEY_LISTEN_PORT], function(){
        console.log(messageConst.NODE_START_LOG + server.address().port);
    });
}