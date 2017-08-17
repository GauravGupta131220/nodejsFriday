var fs = require('fs');
var path=require('path');

var filePath=path.join(__dirname,'India2011.csv');

	var myReadStream = fs.readFileSync(filePath, 'utf8',
		function(err){ console.log(err);

	});

    myReadStream = myReadStream.split("\n");


    var result = [];

    var headers = myReadStream[0].split(",");

    for (var i = 1; i < myReadStream.length; i++) {

        var obj = {};
        var currentline = myReadStream[i].split(",");


        for (var j = 0; j < headers.length; j++) {
            //obj[headers[j]] = currentline[j];
            obj.state=currentline[3];
            obj.age=currentline[5];
        	obj.litterate=currentline[12];
        }
        // obj.age=myReadStream[5];
        // console.log()

        result.push(obj);

    }

    var sum=result.reduce((c,ele)=>{

    		if(ele.age==7)
    			c=c+parseInt(ele.litterate);
    		return c;
    },0);

    console.log(JSON.stringify(sum,null,2));
    //return result; //JavaScript object
    //console.log(JSON.stringify(result,null,2)); //JSON

