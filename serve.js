const fs = require('fs');
const path = require('path');
var compression = require('compression')
var express = require('express');
var app = express();

//尽量在其他中间件前使用compression
app.use(compression());

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.static(path.resolve(__dirname, './unpackage/dist/build/h5')))

app.get('*', function (req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './unpackage/dist/build/h5/index.html'), 'utf-8')
  res.send(html)
})
app.listen(8086, function () {

  console.log("应用实例，访问地址为 http:127.0.0.1:8086")

});
