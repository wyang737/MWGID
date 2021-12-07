'use strict';
module.exports = function(app) {
  app.post('/insert', (req, res) => {
    // var db0 = req.db;
    // var collection = db0.collection('transaction');
    var post = req.query;
    console.log('SANITY CHECK: ', req.query);
    req.db.collection('transaction').insertOne(post, function(error, result) {
      if (error) {
        res.render('error', {
          message: 'Error',
        });
      } else {
        res.send('Inserted');
      }
    });
    // res.send("HELLO!!!");
  });

  app.get('/query', (req, res) => {
    var query = {$or: [{userID: req.query.userID}, {recipID: req.query.userID}]};
    console.log(req.query);
    req.db.collection('transaction').find(query).toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      // console.log(result);
      // db.close();
    });
    // res.send("HELLO!!!");
  });


  app.get('/query6', (req, res) => {
    console.log(req.query);
    req.db.collection('transaction').find().limit(6).toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get('/checkHash', (req, res) => {
    console.log(req.query);
    req.db.collection('transaction').find().skip(req.query.skip+1).limit(6).toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        req.db.collection('transaction').find().skip(req.query.skip).limit(1).toArray(function(err, result1) {
          if (err) {
            console.log(err);
          } else {
            returnVal = {
              'Hash': result1,
              'Value': result
            }
            res.send(returnVal)
          }
        });
      }
    });
  });

  app.get('/queryall', (req, res) => {
    console.log(req.query);
    req.db.collection('transaction').find().toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        console.log(res);
        res.send(result);
      }
    });
  });
};
