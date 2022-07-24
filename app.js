// express モジュールのインスタンス作成
const express = require('express')
const app = express()

// 3000番ポートで Listen する
app.listen(3000, ()=> {
    console.log('Running at Port 3000...')
})