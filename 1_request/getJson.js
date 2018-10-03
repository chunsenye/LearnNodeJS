// 写了个json放在 http://47.75.195.199/NodeApi/test.json 上
var request = require('request');
request('http://47.75.195.199/NodeApi/test.json', function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log(data);
  }
})

