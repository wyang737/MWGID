let counter = 0;
module.exports = function (app) {
    app.post('/insert', (req, res) => {
        var data = {
            "userID": req.query.userID,
            "recipID": req.query.recipID,
            "data": req.query.data
        };
        counter += 1;
        if (counter % 2 == 1){
            req.request({url: 'http://driver1:8080/insert', method: "post", qs: data}, (err, response, body) => {
                if (err) { return console.log(err); }
                res.send(data);
            });
        } else {
            req.request({url: 'http://driver2:8080/insert', method: "post", qs: data}, (err, response, body) => {
                if (err) { return console.log(err); }
                res.send(data);
            });
        }
    });
    
    app.get('/query', (req, res) => {
        var query = {userID: req.query.userID}
        console.log(query);
        req.request({url: 'http://driver1:8080/query', qs: {"userID": req.query.userID}}, (err, response, body) => {
            if (err) { return console.log(err); }
            req.request({url: 'http://driver2:8080/query', qs: {"userID": req.query.userID}}, (err, response, body2) => {
                if (err) { return console.log(err); }
                console.log("Body2: ",body2);
                let json = JSON.parse(body);
                let json2 = JSON.parse(body2);
                var obj = {json, json2};
                let ret_obj = {"transactions": []};
                obj["json"].forEach(element => {
                    ret_obj["transactions"].push(element);
                });
                obj["json2"].forEach(element => {
                    ret_obj["transactions"].push(element);
                });
                    
                // console.log(ret_obj);
                res.send(ret_obj);
            });
        });
    });

<<<<<<< HEAD
app.get('/queryall', (req, res) => {
    console.log(req.query);
    req.db.collection('transaction').find().toArray(function(err, result) {
        if (err) {
            console.log("\n\n\nERROR IN QUERYALL\n\n\n");
            console.log(err);
        } else {
            console.log("\n\n\n\n\n we got here?\n\n\n");
            res.send(result);
        }
=======
    app.get('/queryall', (req, res) => {
        req.request('http://driver1:8080/queryAll', (err, response, body) => {
            if (err) { return console.log(err); }
            req.request('http://driver2:8080/queryAll', (err, response, body2) => {
                if (err) { return console.log(err); }
                let json = JSON.parse(body);
                let json2 = JSON.parse(body2);
                var obj = {json, json2};
                let ret_obj = {"transactions": []};
                obj["json"].forEach(element => {
                    ret_obj["transactions"].push(element);
                });
                obj["json2"].forEach(element => {
                    ret_obj["transactions"].push(element);
                });
                res.send(ret_obj);
            });
        });
>>>>>>> f912b03e1d8d5583e8a1abff5c93374daf0d9790
    });
}
