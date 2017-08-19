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

        obj.state = currentline[3];
        obj.total = currentline[4];
        obj.age = currentline[5];
        obj.males = currentline[40];
        obj.females = currentline[41];
    }

    // to push obj data into result
    result.push(obj);

}


// from age 0 to 6
var JammuMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - JAMMU & KASHMIR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var JammuFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - JAMMU & KASHMIR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var HimachalMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - HIMACHAL PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var HimachalFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - HIMACHAL PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);



var PunjabMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - PUNJAB') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var PunjabFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - PUNJAB') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var ChandigarhMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - CHANDIGARH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var ChandigarhFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - CHANDIGARH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);

var UKMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - UTTARAKHAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var UKFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - UTTARAKHAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var HaryanaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - HARYANA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var HaryanaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - HARYANA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);

var DelhiMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - NCT OF DELHI') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var DelhiFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - NCT OF DELHI') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var RajasthanMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - RAJASTHAN') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var RajasthanFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - RAJASTHAN') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var UPMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - UTTAR PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var UPFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - UTTAR PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var BiharMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - BIHAR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var BiharFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - BIHAR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var SikkimMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - SIKKIM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var SikkimFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - SIKKIM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var ArunachalMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ARUNACHAL PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var ArunachalFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ARUNACHAL PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var NagalandMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - NAGALAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var NagalandFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - NAGALAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var ManipurMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MANIPUR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var ManipurFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MANIPUR') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var MizoramMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MIZORAM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var MizoramFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MIZORAM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var TripuraMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - TRIPURA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var TripuraFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - TRIPURA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var MeghalayaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MEGHALAYA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var MeghalayaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MEGHALAYA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var AssamMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ASSAM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var AssamFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ASSAM') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var WBMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - WEST BENGAL') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var WBFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - WEST BENGAL') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var JharkhandMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - JHARKHAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var JharkhandFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - JHARKHAND') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var OdhisaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ODISHA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var OdhisaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ODISHA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var ChattisgarhMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - CHHATTISGARH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var ChattisgarhFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - CHHATTISGARH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var MPMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MADHYA PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var MPFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MADHYA PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var GJMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - GUJARAT') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var GJFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - GUJARAT') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);

var DamanMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - DAMAN & DIU') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var DamanFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - DAMAN & DIU') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);

var DadraMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - DADRA & NAGAR HAVELI') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var DadraFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - DADRA & NAGAR HAVELI') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var MaharashtraMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MAHARASHTRA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var MaharashtraFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - MAHARASHTRA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);



var AndhraMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ANDHRA PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var AndhraFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ANDHRA PRADESH') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var KarnatakaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - KARNATAKA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var KarnatakaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - KARNATAKA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var GoaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - GOA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var GoaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - GOA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var LakshwadeepMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - LAKSHADWEEP') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var LakshwadeepFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - LAKSHADWEEP') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var KeralaMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - KERALA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var KeralaFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - KERALA') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var TNMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - TAMIL NADU') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var TNFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - TAMIL NADU') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var PundicherryMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - PUDUCHERRY') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var PundicherryFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - PUDUCHERRY') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var AndmanMale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ANDAMAN & NICOBAR ISLANDS') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.males);
    return c;
}, 0);


var AndmanFemale = result.reduce((c, ele) => {

    if ((ele.state == 'State - ANDAMAN & NICOBAR ISLANDS') && (ele.total == 'Total') && (ele.age == 'All ages'))
        c = parseInt(ele.females);
    return c;
}, 0);


var jsonObject={

	graduateData : []
};


jsonObject.graduateData.push({jkMale : JammuMale ,  jkFemale: JammuFemale });
jsonObject.graduateData.push({HPMale : HimachalMale , HPFemale: HimachalFemale });
jsonObject.graduateData.push({punjabMale : PunjabMale ,  punjabFemale: PunjabFemale });
jsonObject.graduateData.push({chandigarhMale : ChandigarhMale ,  chandigarhFemale: ChandigarhFemale });
jsonObject.graduateData.push({UKMale : UKMale ,  UKFemale: UKFemale });
jsonObject.graduateData.push({haryanaMale : HaryanaMale ,  haryanaFemale: HaryanaFemale });
jsonObject.graduateData.push({delhiMale : DelhiMale ,  delhiFemale: DelhiMale });
jsonObject.graduateData.push({rajasthanMale : RajasthanMale ,  rajasthanFemale: RajasthanFemale });
jsonObject.graduateData.push({UPMale : UPMale ,  UPFemale: UPFemale });
jsonObject.graduateData.push({biharMale : BiharMale ,  biharFemale: BiharFemale });
jsonObject.graduateData.push({sikkimMale : SikkimMale ,  sikkimFemale: SikkimFemale });
jsonObject.graduateData.push({arunacahalMale : ArunachalMale ,  arunachalFemale: ArunachalFemale });
jsonObject.graduateData.push({nagalandMale : NagalandMale ,  nagalandFemale: NagalandFemale });
jsonObject.graduateData.push({manipurMale : ManipurMale ,  manipurFemale: ManipurFemale });
jsonObject.graduateData.push({mizoramMale : MizoramMale ,  mizoramFemale: MizoramFemale });
jsonObject.graduateData.push({tripuraMale : TripuraMale ,  tripuraFemale: TripuraFemale });
jsonObject.graduateData.push({meghalayaMale : MeghalayaMale ,  meghalayaFemale: MeghalayaFemale });
jsonObject.graduateData.push({assamMale : AssamMale ,  assamFemale: AssamFemale });
jsonObject.graduateData.push({wbMale : WBMale ,  wbFemale: WBFemale });
jsonObject.graduateData.push({jharkhandMale : JharkhandMale ,  jharkhandFemale: JharkhandFemale });
jsonObject.graduateData.push({odhissaMale : OdhisaMale ,  odhissaFemale: OdhisaFemale });
jsonObject.graduateData.push({chattisgarhMale : ChattisgarhMale ,  chattisgarhFemale: ChattisgarhFemale });
jsonObject.graduateData.push({MPMale : MPMale ,  MPFemale: MPFemale });
jsonObject.graduateData.push({GJMale : GJMale ,  GJFemale: GJFemale });
jsonObject.graduateData.push({damanMale : DamanMale ,  damanFemale: DamanFemale });
jsonObject.graduateData.push({dadraMale : DadraMale ,  dadraFemale: DadraFemale });
jsonObject.graduateData.push({maharashtraMale : MaharashtraMale ,  maharashtraFemale: MaharashtraFemale });
jsonObject.graduateData.push({andhraMale : AndhraMale ,  andhraFemale: AndhraFemale });
jsonObject.graduateData.push({karnatakaMale : KarnatakaMale ,  karnatakaFemale: KarnatakaFemale });
jsonObject.graduateData.push({goaMale : GoaMale ,  goaFemale: GoaFemale });
jsonObject.graduateData.push({lakshwadeepMale : LakshwadeepMale ,  laskshwadeepFemale: LakshwadeepFemale });
jsonObject.graduateData.push({keralaMale : KeralaMale ,  keralaFemale: KeralaFemale });
jsonObject.graduateData.push({tnMale : TNMale ,  tnFemale: TNFemale });
jsonObject.graduateData.push({pundicherryMale : PundicherryMale ,  pundicherryFemale: PundicherryFemale });
jsonObject.graduateData.push({andmanMale : AndmanMale ,  andmanFemale: AndmanFemale });



var jammuGraduates = JSON.stringify(jsonObject,null,2);
var HPGraduates = JSON.stringify(jsonObject,null,2);
var punjabGraduates = JSON.stringify(jsonObject,null,2);
var chandigarhGraduates = JSON.stringify(jsonObject,null,2);
var ukGraduates = JSON.stringify(jsonObject,null,2);
var haryanaGraduates = JSON.stringify(jsonObject,null,2);
var delhiGraduates = JSON.stringify(jsonObject,null,2);
var rajasthanGraduates = JSON.stringify(jsonObject,null,2);
var UPGraduates = JSON.stringify(jsonObject,null,2);
var biharGraduates = JSON.stringify(jsonObject,null,2);
var sikkimGraduates = JSON.stringify(jsonObject,null,2);
var arunachalGraduates = JSON.stringify(jsonObject,null,2);
var nagalandGraduates = JSON.stringify(jsonObject,null,2);
var manipurGraduates = JSON.stringify(jsonObject,null,2);
var mizoramGraduates = JSON.stringify(jsonObject,null,2);
var tripuraGraduates = JSON.stringify(jsonObject,null,2);
var meghalyaGraduates = JSON.stringify(jsonObject,null,2);
var assamGraduates = JSON.stringify(jsonObject,null,2);
var wbGraduates = JSON.stringify(jsonObject,null,2);
var jharkhandGraduates = JSON.stringify(jsonObject,null,2);
var odhissaGraduates = JSON.stringify(jsonObject,null,2);
var chattisgarhGraduates = JSON.stringify(jsonObject,null,2);
var MPGraduates = JSON.stringify(jsonObject,null,2);
var GJGraduates = JSON.stringify(jsonObject,null,2);
var damanGraduates = JSON.stringify(jsonObject,null,2);
var dadraGraduates = JSON.stringify(jsonObject,null,2);
var maharashtraGraduates = JSON.stringify(jsonObject,null,2);
var andhraGraduates = JSON.stringify(jsonObject,null,2);
var karnatakaGraduates = JSON.stringify(jsonObject,null,2);
var goaGraduates = JSON.stringify(jsonObject,null,2);
var lakshwadeepGraduates = JSON.stringify(jsonObject,null,2);
var keralaGraduates = JSON.stringify(jsonObject,null,2);
var tnGraduates = JSON.stringify(jsonObject,null,2);
var pundicherryGraduates = JSON.stringify(jsonObject,null,2);
var andmanGraduates = JSON.stringify(jsonObject,null,2);

// print data on to the console
//console.log(result);
// console.log(JSON.stringify(JammuMale, null, 2));

fs.writeFile('graduatesjsonfile.json', jammuGraduates);
fs.writeFile('graduatesjsonfile.json', HPGraduates);
fs.writeFile('graduatesjsonfile.json', punjabGraduates);
fs.writeFile('graduatesjsonfile.json', chandigarhGraduates);
fs.writeFile('graduatesjsonfile.json', ukGraduates);
fs.writeFile('graduatesjsonfile.json', haryanaGraduates);
fs.writeFile('graduatesjsonfile.json', delhiGraduates);
fs.writeFile('graduatesjsonfile.json', rajasthanGraduates);
fs.writeFile('graduatesjsonfile.json', UPGraduates);
fs.writeFile('graduatesjsonfile.json', biharGraduates);
fs.writeFile('graduatesjsonfile.json', sikkimGraduates);
fs.writeFile('graduatesjsonfile.json', arunachalGraduates);
fs.writeFile('graduatesjsonfile.json', nagalandGraduates);
fs.writeFile('graduatesjsonfile.json', manipurGraduates);
fs.writeFile('graduatesjsonfile.json', mizoramGraduates);
fs.writeFile('graduatesjsonfile.json', tripuraGraduates);
fs.writeFile('graduatesjsonfile.json', meghalyaGraduates);
fs.writeFile('graduatesjsonfile.json', wbGraduates);
fs.writeFile('graduatesjsonfile.json', jharkhandGraduates);
fs.writeFile('graduatesjsonfile.json', odhissaGraduates);
fs.writeFile('graduatesjsonfile.json', chattisgarhGraduates);
fs.writeFile('graduatesjsonfile.json', MPGraduates);
fs.writeFile('graduatesjsonfile.json', GJGraduates);
fs.writeFile('graduatesjsonfile.json', damanGraduates);
fs.writeFile('graduatesjsonfile.json', dadraGraduates);
fs.writeFile('graduatesjsonfile.json', maharashtraGraduates);
fs.writeFile('graduatesjsonfile.json', andhraGraduates);
fs.writeFile('graduatesjsonfile.json', karnatakaGraduates);
fs.writeFile('graduatesjsonfile.json', goaGraduates);
fs.writeFile('graduatesjsonfile.json', lakshwadeepGraduates);
fs.writeFile('graduatesjsonfile.json', keralaGraduates);
fs.writeFile('graduatesjsonfile.json', tnGraduates);
fs.writeFile('graduatesjsonfile.json', pundicherryGraduates);
fs.writeFile('graduatesjsonfile.json', andmanGraduates);



//console.log(JSON.stringify(JammuFemale, null, 2));