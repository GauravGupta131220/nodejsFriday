var fs = require('fs');
var path=require('path');

var filePath=path.join(__dirname,'India2011.csv');

	var myReadStream = fs.readFileSync(filePath, 'utf8',
		function(err){ console.log(err);

	});
	
// myReadStream.on('data', function(chunk) {

//     console.log("new chunk received");
//     console.log(chunk);
//     // var result=toJson(chunk);
//     // console.log(JSON.stringify(result));
    myReadStream = myReadStream.split("\n");

    var result = [];

    var headers = myReadStream[0].split(",");

    for (var i = 1; i < myReadStream.length; i++) {

        var obj = {};
        var currentline = myReadStream[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    //return result; //JavaScript object
    console.log(JSON.stringify(result)); //JSON