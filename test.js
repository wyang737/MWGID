var http = require('http')

http.get('http://localhost:4200/api/insert/?userID=specialtest&recipID=number&data=' + '420', function(response) {
	http.get('http://localhost:4200/api/query/?userID=specialtest', function(res) {
		var specialBody;
		res.on("data", function(chunk) {
			console.log("Testing single insertion:");
			specialBody += chunk;	
		})
		res.on("end", () =>{
			var jsonRet = JSON.parse(specialBody.substring(9));
			if (jsonRet.transactions[0].recipID == "number" && jsonRet.transactions[0].data == '420')
			{
				console.log("Single Insert Worked")
			}
			else {
				process.exit(1)
			}
		})
	})
})

async function insertThings(){
	return Promise(res => {
		var i;
		for (i = 0; i <= 20; i ++)
		{
			http.get('http://localhost:4200/api/insert/?userID=test&recipID=number&data=' + i), (response) => {
			}
		} 
		res(i)
	});
}

var1 = insertThings();

var1.then((res) => {
	http.get('http://localhost:4200/api/query/?userID=hash', function(res) {
		var hashBody;
		res.on("data", function(chunk) {
			console.log("Testing for hashing/queryall:");
			hashBody += chunk;	
		})
		res.on("end", () =>{
			var jsonHashRet = JSON.parse(hashBody.substring(9));
			if (jsonHashRet.transactions[0].userID == "hash")
			{
				console.log("Hash / Queryall worked")
			}
			else {
				process.exit(1)
			}
		})
	});
});
