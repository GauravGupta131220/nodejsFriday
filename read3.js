var fs = require('fs');
var path = require('path');


// path given for the required file
var filePath = path.join(__dirname, 'India2011.csv');


// read the file in the variable myReadStream
var myReadStream = fs.readFileSync(filePath, 'utf8', function(err) {

    console.log(err);
});


//to split to new line
myReadStream = myReadStream.split("\n");

// print the file data on console
//console.log(myReadStream);


var result = [];

var headers = myReadStream[0].split(",");



for (var i = 1; i < myReadStream.length; i++) {

    var obj = {};
    var currentline = myReadStream[i].split(",");

    for (var j = 0; j < headers.length; j++) {


        obj.total = currentline[4];
        obj.age = currentline[5];
        obj.withoutEducation = currentline[16];
        obj.belowPrimary = currentline[19];
        obj.primary = currentline[22];
        obj.middle = currentline[25];
        obj.MatricSecondary = currentline[28];
        obj.higherSecondary = currentline[31];
        obj.nonTechnicalDiploma = currentline[34];
        obj.technicalDiploma = currentline[37];
        obj.graduateAndAbove = currentline[41];
        obj.unclassified = currentline[44];
    }

    // to push obj data into result
    result.push(obj);

}

//console.log(result);

var without_education = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.withoutEducation);
    return c;
}, 0);

var below_primary = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.belowPrimary);
    return c;
}, 0);

var primary = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.primary);
    return c;
}, 0);

var middle = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.middle);
    return c;
}, 0);

var matric_secondary = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.MatricSecondary);
    return c;
}, 0);

var higher_secondary = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.higherSecondary);
    return c;
}, 0);

var non_technical_diploma = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.nonTechnicalDiploma);
    return c;
}, 0);

var technical_diploma = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.technicalDiploma);
    return c;
}, 0);

var graduate_and_above = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.graduateAndAbove);
    return c;
}, 0);

var unclassified = result.reduce((c, ele) => {

    if ((ele.total == 'Total') && (ele.age == 'All ages') )
        c = c + parseInt(ele.unclassified);
    return c;
}, 0);


//console.log(JSON.stringify(without_education, null, 2));

var myObj = {
    ageData: []
};


myObj.ageData.push({withoutEducation : without_education});
myObj.ageData.push({belowPrimary : below_primary});
myObj.ageData.push({primary : primary});
myObj.ageData.push({middle : middle});
myObj.ageData.push({MatricSecondary : matric_secondary});
myObj.ageData.push({HigherSecondary : higher_secondary});
myObj.ageData.push({NonTechnicalDiploma : non_technical_diploma});
myObj.ageData.push({TechnicalDiploma : technical_diploma});
myObj.ageData.push({GraduateAndAbove : graduate_and_above});
myObj.ageData.push({Unclassified : unclassified});




var withoutEducation=JSON.stringify(myObj,null,2);
var belowPrimEducation=JSON.stringify(myObj,null,2);
var primEducation=JSON.stringify(myObj,null,2);
var middleEducation=JSON.stringify(myObj,null,2);
var matricEducation=JSON.stringify(myObj,null,2);
var higherSecEducation=JSON.stringify(myObj,null,2);
var nonTechDipEducation=JSON.stringify(myObj,null,2);
var techDiplomaEducation=JSON.stringify(myObj,null,2);
var graduateandAboveEdu=JSON.stringify(myObj,null,2);
var unclassifiedEducation=JSON.stringify(myObj,null,2);




fs.writeFile('educationCateogaryjson.json', withoutEducation);
fs.writeFile('educationCateogaryjson.json', belowPrimEducation);
fs.writeFile('educationCateogaryjson.json', primEducation);
fs.writeFile('educationCateogaryjson.json', middleEducation);
fs.writeFile('educationCateogaryjson.json', matricEducation);
fs.writeFile('educationCateogaryjson.json', higherSecEducation);
fs.writeFile('educationCateogaryjson.json', nonTechDipEducation);
fs.writeFile('educationCateogaryjson.json', techDiplomaEducation);
fs.writeFile('educationCateogaryjson.json', graduateandAboveEdu);
fs.writeFile('educationCateogaryjson.json', unclassifiedEducation);
