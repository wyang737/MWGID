module.exports = function (app) {
    app.post('/insert', (req, res) => {
        var post = req.query;
        console.log("SANITY CHECK: ", req.query);
        req.db.collection('transaction').insertOne(post, function(error, result) {
            if (error) {
                res.render('error', {
                    message: 'Error'
                });
            }
            else {
                res.send("Inserted");
            }
        });
        // res.send("HELLO!!!");
    });
    
    app.get('/query', (req, res) => {
        var query = {userID: req.query.userID}
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

app.get('/queryall', (req, res) => {
    console.log(req.query);
    req.db.collection('transaction').find().toArray(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
}
