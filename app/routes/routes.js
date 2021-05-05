module.exports = function (app) {
    app.post('/insert', (req, res) => {
        var db = req.db;
        var collection = db.collection('transaction');
        var post = req.body;
        collection.insert(post, function(error, result) {
            if (error) {
                res.render('error', {
                    message: 'Error'
                });
            }
            else {
                res.redirect("/");
            }
        });
    });
    
    app.get('/query', (req, res) => {
        var db = req.db;
        var collection = db.collection('transaction');
        var query = {userID: req.body.userID}
        dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}
