'use strict';
let counter = 0;
module.exports = function(app) {
  app.get('/api/insert', (req, res) => {
    var data = {
      userID: req.query.userID,
      recipID: req.query.recipID,
      data: req.query.data,
    };
    counter += 1;
    if (counter % 2 === 1){
      req.request({url: 'http://driver1:8080/insert', method: 'post', qs: data}, (err, response, body) => {
        if (err) { return console.log(err); }
        res.send(data);
      });
    } else {
      req.request({url: 'http://driver2:8080/insert', method: 'post', qs: data}, (err, response, body) => {
        if (err) { return console.log(err); }
        res.send(data);
      });
    }
    if (counter % 10 === 0){
      req.request('http://driver1:8080/query6', (err, response, body) => {
        if (err) { return console.log(err); }
        req.request('http://driver2:8080/query6', (err, response, body2) => {
          if (err) { return console.log(err); }
          let json = JSON.parse(body);
          let json2 = JSON.parse(body2);
          let data1 = {
            userID: 'hash',
            data: req.crypto.createHash('sha256').update(JSON.stringify(json)).digest('hex'),
          };
          let data2 = {
            userID: 'hash',
            data: req.crypto.createHash('sha256').update(JSON.stringify(json2)).digest('hex'),
          };
          req.request({url: 'http://driver2:8080/insert', method: 'post', qs: data1}, (err, response, body) => {
            if (err) { return console.log(err); }
            req.request({url: 'http://driver1:8080/insert', method: 'post', qs: data2}, (err, response, body) => {
              if (err) { return console.log(err); }
            });
          });

        });
      });
    }
  });

  app.get('/api/query', (req, res) => {
    var query = {userID: req.query.userID};
    console.log(query);
    req.request({url: 'http://driver1:8080/query', qs: {userID: req.query.userID}}, (err, response, body) => {
      if (err) { return console.log(err); }
      req.request({url: 'http://driver2:8080/query', qs: {userID: req.query.userID}}, (err, response, body2) => {
        if (err) { return console.log(err); }
        console.log('Body2: ', body2);
        let json = JSON.parse(body);
        let json2 = JSON.parse(body2);
        var obj = {json, json2};
        let ret_obj = {transactions: []};
        obj['json'].forEach(element => {
          ret_obj['transactions'].push(element);
        });
        obj['json2'].forEach(element => {
          ret_obj['transactions'].push(element);
        });

        // console.log(ret_obj);
        res.send(ret_obj);
      });
    });
  });

  app.get('/api/queryall', (req, res) => {
    req.request('http://driver1:8080/queryAll', (err, response, body) => {
      if (err) { return console.log(err); }
      req.request('http://driver2:8080/queryAll', (err, response, body2) => {
        if (err) { return console.log(err); }
        let json = JSON.parse(body);
        let json2 = JSON.parse(body2);
        var obj = {json, json2};
        let ret_obj = {transactions: []};
        obj['json'].forEach(element => {
          ret_obj['transactions'].push(element);
        });
        obj['json2'].forEach(element => {
          ret_obj['transactions'].push(element);
        });
        res.send(ret_obj);
      });
    });
  });
};
