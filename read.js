var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'India2011.csv');

var myReadStream = fs.readFileSync(filePath, 'utf8',
    function(err) {
        console.log(err);

    });

myReadStream = myReadStream.split("\n");


var result = [];

var headers = myReadStream[0].split(",");

for (var i = 1; i < myReadStream.length; i++) {

    var obj = {};
    var currentline = myReadStream[i].split(",");


    for (var j = 0; j < headers.length; j++) {
        //obj[headers[j]] = currentline[j];
        obj.state = currentline[3];
        obj.total = currentline[4];
        obj.age = currentline[5];
        obj.litterate = currentline[12];
    }



    result.push(obj);

}


// from age 0 to 6
var sumTill6 = result.reduce((c, ele) => {

    if ((ele.age == '0-6') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

console.log(JSON.stringify(sumTill6, null, 2));



// from age 7 to 19
var i = 7;
while (i <= 19) {

    var sum = result.reduce((c, ele) => {

        if ((ele.age == i) && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    i++;

}

console.log(JSON.stringify(sum, null, 2));

// from age 20 to 24
var sum1 = result.reduce((c, ele) => {

    if ((ele.age == '20-24') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 25 to 29
var sum2 = result.reduce((c, ele) => {

    if ((ele.age == '25-29') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

// from age 30 to 34
var sum3 = result.reduce((c, ele) => {

    if ((ele.age == '30-34') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 35 to 39
var sum4 = result.reduce((c, ele) => {

    if ((ele.age == '35-39') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

// from age 40 to 44
var sum5 = result.reduce((c, ele) => {

    if ((ele.age == '40-44') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 45 to 49
var sum6 = result.reduce((c, ele) => {

    if ((ele.age == '45-49') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 50 to 54
var sum7 = result.reduce((c, ele) => {

    if ((ele.age == '50-54') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

// from age 55 to 59
var sum8 = result.reduce((c, ele) => {

    if ((ele.age == '55-59') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

// from age 60 to 64
var sum9 = result.reduce((c, ele) => {

    if ((ele.age == '60-64') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);



// from age 65 to 69
var sum10 = result.reduce((c, ele) => {

    if ((ele.age == '65-69') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 70 to 74
var sum11 = result.reduce((c, ele) => {

    if ((ele.age == '70-74') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


// from age 75 to 79
var sum12 = result.reduce((c, ele) => {

    if ((ele.age == '75-79') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);

// age above 80
var sum13 = result.reduce((c, ele) => {

    if ((ele.age == '80+') && (ele.total == 'Total'))
        c = c + parseInt(ele.litterate);
    return c;
}, 0);


//to print key-value pair in console
//console.log(result);

//to print the sum of literate population of all states having different ages from 20 to 80 plus

// console.log(JSON.stringify(sum1, null, 2));
// console.log(JSON.stringify(sum2, null, 2));
// console.log(JSON.stringify(sum3, null, 2));
// console.log(JSON.stringify(sum4, null, 2));
// console.log(JSON.stringify(sum5, null, 2));
// console.log(JSON.stringify(sum5, null, 2));
// console.log(JSON.stringify(sum6, null, 2));
// console.log(JSON.stringify(sum7, null, 2));
// console.log(JSON.stringify(sum8, null, 2));
// console.log(JSON.stringify(sum9, null, 2));
// console.log(JSON.stringify(sum10, null, 2));
// console.log(JSON.stringify(sum11, null, 2));
// console.log(JSON.stringify(sum12, null, 2));
// console.log(JSON.stringify(sum13, null, 2));


//Create a javascript object with the  array named ageData 	in it
var myObj = {
    ageData: []
};

// adding data to it
myObj.ageData.push({age_0To6 : sumTill6});
myObj.ageData.push({age_7To19 : sum});
myObj.ageData.push({age_20To24 : sum1});
myObj.ageData.push({age_25To29 : sum2});
myObj.ageData.push({age_30To34 : sum3});
myObj.ageData.push({age_35To39 : sum4});
myObj.ageData.push({age_40To44 : sum5});
myObj.ageData.push({age_45To49 : sum6});
myObj.ageData.push({age_50To54 : sum7});
myObj.ageData.push({age_55To59 : sum8});
myObj.ageData.push({age_60T064 : sum9});
myObj.ageData.push({age_65To69 : sum10});
myObj.ageData.push({age_70To74 : sum11});
myObj.ageData.push({age_75To79 : sum12});
myObj.ageData.push({age_80Plus : sum13});

//Convert it from an object to string with stringify
var age0To6=JSON.stringify(myObj,null,2);
var age7To19=JSON.stringify(myObj,null,2);
var age20To24=JSON.stringify(myObj,null,2);
var age25To29=JSON.stringify(myObj,null,2);
var age30To34=JSON.stringify(myObj,null,2);
var age35To39=JSON.stringify(myObj,null,2);
var age40To44=JSON.stringify(myObj,null,2);
var age45To49=JSON.stringify(myObj,null,2);
var age50To54=JSON.stringify(myObj,null,2);
var age55To59=JSON.stringify(myObj,null,2);
var age60To64=JSON.stringify(myObj,null,2);
var age65To69=JSON.stringify(myObj,null,2);
var age70To74=JSON.stringify(myObj,null,2);
var age75To79=JSON.stringify(myObj,null,2);
var age80Plus=JSON.stringify(myObj,null,2);

//use fs to write the file to disk
fs.writeFile('myjsonfile.json', age0To6);
fs.writeFile('myjsonfile.json', age7To19);
fs.writeFile('myjsonfile.json', age20To24);
fs.writeFile('myjsonfile.json', age25To29);
fs.writeFile('myjsonfile.json', age30To34);
fs.writeFile('myjsonfile.json', age35To39);
fs.writeFile('myjsonfile.json', age40To44);
fs.writeFile('myjsonfile.json', age45To49);
fs.writeFile('myjsonfile.json', age50To54);
fs.writeFile('myjsonfile.json', age55To59);
fs.writeFile('myjsonfile.json', age60To64);
fs.writeFile('myjsonfile.json', age65To69);
fs.writeFile('myjsonfile.json', age70To74);
fs.writeFile('myjsonfile.json', age75To79);
fs.writeFile('myjsonfile.json', age80Plus);



//return result; //JavaScript object
//console.log(JSON.stringify(result,null,2)); //JSON
//console.log(result);