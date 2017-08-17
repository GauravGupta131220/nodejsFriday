var fs = require('fs');
var path=require('path');

var filePath=path.join(__dirname,'India2011.csv');

    var myReadStream = fs.readFile(filePath, 'utf8',function(err,data){ 

        //console.log(data);
        data = data.split("\n");

        var result = [];

        var headers = data[0].split(",");

        for (var i = 1; i < data.length; i++) {

            var obj = {};
            var currentline = data[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);

        }

        /*var jsonResult=result.filter(returnAge);

        function returnAge(val){
            return result[5]==="All ages";
        }*/
        var jsonResult=result.filter(ele=>ele['Age-group']==="All ages");
        var jsonResult2=jsonResult.map(ele=>ele['Age-group']);


        var output=path.join(__dirname,'result.json');
        //return result; //JavaScript object
        fs.writeFile(output,JSON.stringify(jsonResult2,null,2),'utf8',function(err){

        });


    });

    