// express モジュールのインスタンス作成
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const serverConst = require('./constants/server-constants');
const actionName = require('./constants/action-name-constantas');
// const logger = require('./util/logger');

// ルーティングの読み込み
const startUp = require('./routes/common/start-up');
// const security = require('./routes/security/security-root');
// const session = require('./routes/common/session')
const root = require('./routes/common/application-root');

startUp.call(app);

// View Engineの設定
app.set(serverConst.VIEW_ENGINE, serverConst.VIEW_ENGINE_VAL);

root.call(app);