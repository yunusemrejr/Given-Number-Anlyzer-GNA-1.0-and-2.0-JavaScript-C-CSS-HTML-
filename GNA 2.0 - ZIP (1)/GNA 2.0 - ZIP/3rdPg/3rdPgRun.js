function timePrint(){const dateNow = new Date();
document.getElementById("outputDate").innerHTML += 'Your Browser Date &amp; Time: '+dateNow;
                    }


//Create JSON Data File Functions //////

var JSONFileContent = 'empty';

function createJSONDataFileForUser() {


JSONFileContent =
'<div style="color:lightgreen;background-color:black;font-family:courier;font-size:15px;">'+
  '<p style="font-size:25px;font-family:courier;"><b>{</b></p><br /><br />'+'<b>output: </b>'
+'"'+'<b>'+userInteractionData1_output_value_of_p1 +'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+  userInteractionData1_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p7+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p22+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p31+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p34+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData1_output_value_of_p37+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p40+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p46+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData1_output_value_of_p49+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData1_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    +'<b>'+ userInteractionData2_output_value_of_p1+ '"' +'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+    userInteractionData2_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p4+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p22+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p31+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p34+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p37+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p40+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p46+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData2_output_value_of_p49+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData2_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    + '<b>'+ userInteractionData3_output_value_of_p1+ '"' +'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData3_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p4+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p7+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p22 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p25 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p28 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p31 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p40 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p43 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData3_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData3_output_value_of_p49+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData3_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    + '<b>'+ userInteractionData4_output_value_of_p1 + '"'+'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData4_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p22+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p31+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p34+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p37+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p40+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p46+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData4_output_value_of_p49+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData4_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+ '"'    +'<b>'+ userInteractionData5_output_value_of_p1 + '"'+'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData5_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p4+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p13 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p16 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p19 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p22 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p31 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p40+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p46+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData5_output_value_of_p49 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData5_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    +'<b>'+  userInteractionData6_output_value_of_p1+ '"' +'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+    userInteractionData6_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p13 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p22 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p25 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p28 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p31 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p40+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData6_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData6_output_value_of_p49 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData6_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+ '"'    +'<b>'+ userInteractionData7_output_value_of_p1 + '"'+'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData7_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData7_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p13 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p16 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p19 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p22 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p25 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p28 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p31+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p40 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p43+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData7_output_value_of_p49 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData7_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    +'<b>'+  userInteractionData8_output_value_of_p1+ '"'+'</b>' +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData8_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p4+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p16+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p19+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p22+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p31 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p34+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p37+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p40 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p43 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData8_output_value_of_p49+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData8_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    +'<b>'+  userInteractionData9_output_value_of_p1+ '"' +'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData9_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p10+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p13+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p16 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p19 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p22+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p25+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p28+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p31+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p40 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p43 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData9_output_value_of_p49 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData9_output_value_of_p50 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +

'<b>output: </b>'+'"'    + '<b>'+ userInteractionData10_output_value_of_p1 + '"'+'</b>'+'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+   userInteractionData10_output_value_of_p2 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p3 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p4 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p5 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p6 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p7 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p8 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p9 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p10 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p11 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p12 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p13 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p14 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p15 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p16 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p17 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p18 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p19 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p20 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p21 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p22 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p23 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p24 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p25 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p26 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p27 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p28 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p29 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p30 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p31 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p32 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p33 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p34 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p35 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p36 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p37 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p38 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p39 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p40 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p41 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p42 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+ '"'    +userInteractionData10_output_value_of_p43 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p44 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p45 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p46 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p47 +'"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p48 +'"'+ ',<br/ ><br/ >'+
'<b>output: </b>'+'"'    + userInteractionData10_output_value_of_p49 + '"'+ ',<br/ ><br/ >'+'<b>output: </b>' +'"'+ userInteractionData10_output_value_of_p50 + ',<br/ ><br/ >'
+ '<p style="font-size:25px;font-family:courier;"><b>{</b></p>' +'</div>';

}



function giveJSONDataFileToUser() {

alert('IMPORTANT: DON\'T FORGET to change the JSON variables, they will all be named as "output" as default when file is generated. ');

  document.write('<div  style="background-color:black;">'+'<button id="buttonToRunDownloadOfJSON" href="sa.png" download="fff.png" style="color:lightgreen;font-size:50px;font-family:arial;background-color:black;border: 5px solid;border-color:lightgreen;border-radius:11px;width:50%;">DOWNLOAD JSON</button><br /><br /><p style="font-size:20px;color:lightgreen;background-color:black;">OR copy below: </p>'+'<div id="downloadableJSONFileReady">'+JSONFileContent+'</div>'+'</div>');

function downloadYourJSON() {
var saveThisAsJSON=document.getElementById('downloadableJSONFileReady').innerText;
var createAttributionTagElementForDownload= document.createElement('a');
  createAttributionTagElementForDownload.href='data:JSON,'+encodeURI(saveThisAsJSON);
  createAttributionTagElementForDownload.target='_blank';
  createAttributionTagElementForDownload.download='yourGNAResults.JSON';
  createAttributionTagElementForDownload.click();
  }
document.getElementById('buttonToRunDownloadOfJSON').addEventListener('click', downloadYourJSON);


}





//API(s)

function p1() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.USD;
document.getElementById('output2').innerHTML = 'your input <b>X</b> (times) EUR/USD current exchange rate: ' + response * document.getElementById('pg2Input').value + ' $ (USD)'}

         }














function p2() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.GBP;
document.getElementById('output49').innerHTML = 'your input <b>X</b> (times) EUR/GBP current exchange rate: ' + response * document.getElementById('pg2Input').value + ' GBP'}

}

















function p3() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.JPY;
document.getElementById('output50').innerHTML = 'your input <b>X</b> (times) EUR/JPY current exchange rate: ' + response * document.getElementById('pg2Input').value + ' JPY'}

}


















function p4() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.XAU;
document.getElementById('output3').innerHTML = 'your input <b>X</b> (times) EUR/XAU current exchange rate: ' + response * document.getElementById('pg2Input').value + ' XAU'}

}















function p5() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.USD;
document.getElementById('output4').innerHTML = 'your input <b>+</b> (plus) EUR/USD current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' USD'}

}














function p6() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.JPY;
document.getElementById('output5').innerHTML = 'your input <b>+</b> (plus) EUR/JPY current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' JPY'}

}



function p7() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.RUB;
document.getElementById('output6').innerHTML = 'your input <b>+</b> (plus) EUR/RUB current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' RUB'}

}












function p8() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.RUB;
document.getElementById('output7').innerHTML = 'EUR/RUB current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' RUB'}

}












function p9() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.USD;
document.getElementById('output8').innerHTML = 'EUR/USD current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' USD'}

}












function p10() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.JPY;
document.getElementById('output9').innerHTML = 'EUR/JPY current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' JPY'}

}










function p11() {
      var requestURL = 'https://api.exchangerate.host/latest';

   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.AUD;
document.getElementById('output10').innerHTML = 'EUR/AUD current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' AUD'}

}










function p12() {    var requestURL = 'https://api.exchangerate.host/latest';

   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CAD;
document.getElementById('output11').innerHTML = 'EUR/CAD current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' CAD'}

}










function p13() {    var requestURL = 'https://api.exchangerate.host/latest';

   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CHF;
document.getElementById('output12').innerHTML = 'EUR/CHF current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' CHF'}

}











function p14() {    var requestURL = 'https://api.exchangerate.host/latest';

   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CNY;
document.getElementById('output13').innerHTML = 'EUR/CNY current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' CNY'}

}













function p15() {    var requestURL = 'https://api.exchangerate.host/latest';

   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.HKD;
document.getElementById('output14').innerHTML = 'EUR/HKD current exchange rate  <b>/</b> (divided by) your input: ' + parseFloat(parseFloat(response)  /  parseFloat(document.getElementById('pg2Input').value)) + ' HKD'}

}












function p16() {    var requestURL = 'https://api.exchangerate.host/latest';

    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.NZD;
document.getElementById('output15').innerHTML = 'your input <b>X</b> (times) EUR/NZD current exchange rate: ' + response * document.getElementById('pg2Input').value + ' NZD'}

}












function p17() {    var requestURL = 'https://api.exchangerate.host/latest';

    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.SEK;
document.getElementById('output16').innerHTML = 'your input <b>X</b> (times) EUR/SEK current exchange rate: ' + response * document.getElementById('pg2Input').value + ' SEK'}

}












function p18() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.KRW;
document.getElementById('output17').innerHTML = 'your input <b>X</b> (times) EUR/KRW current exchange rate: ' + response * document.getElementById('pg2Input').value + ' KRW'}

}











function p19() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.SGD;
document.getElementById('output18').innerHTML = 'your input <b>X</b> (times) EUR/SGD current exchange rate: ' + response * document.getElementById('pg2Input').value + ' SGD'}

}













function p20() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.NOK;
document.getElementById('output19').innerHTML = 'your input <b>X</b> (times) EUR/NOK current exchange rate: ' + response * document.getElementById('pg2Input').value + ' NOK'}

}












function p21() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.MXN;
document.getElementById('output20').innerHTML = 'your input <b>X</b> (times) EUR/MXN current exchange rate: ' + response * document.getElementById('pg2Input').value + ' MXN'}

}











function p22() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.INR;
document.getElementById('output21').innerHTML = 'your input <b>X</b> (times) EUR/INR current exchange rate: ' + response * document.getElementById('pg2Input').value + ' INR'}

}











function p23() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.ZAR;
document.getElementById('output22').innerHTML = 'your input <b>X</b> (times) EUR/ZAR current exchange rate: ' + response * document.getElementById('pg2Input').value + ' ZAR'}

}












function p24() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.TRY;
document.getElementById('output23').innerHTML = 'your input <b>X</b> (times) EUR/TRY current exchange rate: ' + response * document.getElementById('pg2Input').value + ' TRY'}

}











function p25() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.BRL;
document.getElementById('output24').innerHTML = 'your input <b>X</b> (times) EUR/BRL current exchange rate: ' + response * document.getElementById('pg2Input').value + ' BRL'}

}












function p26() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.TWD;
document.getElementById('output25').innerHTML = 'your input <b>X</b> (times) EUR/TWD current exchange rate: ' + response * document.getElementById('pg2Input').value + ' TWD'}

}










function p27() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.DKK;
document.getElementById('output26').innerHTML = 'your input <b>X</b> (times) EUR/DKK current exchange rate: ' + response * document.getElementById('pg2Input').value + ' DKK'}

}












function p28() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.PLN;
document.getElementById('output27').innerHTML = 'your input <b>X</b> (times) EUR/PLN current exchange rate: ' + response * document.getElementById('pg2Input').value + ' PLN'}

}












function p29() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.THB;
document.getElementById('output28').innerHTML = 'your input <b>X</b> (times) EUR/THB current exchange rate: ' + response * document.getElementById('pg2Input').value + ' THB'}

}













function p30() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.IDR;
document.getElementById('output29').innerHTML = 'your input <b>X</b> (times) EUR/IDR current exchange rate: ' + response * document.getElementById('pg2Input').value + ' IDR'}

}











function p31() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.HUF;
document.getElementById('output30').innerHTML = 'your input <b>X</b> (times) EUR/HUF current exchange rate: ' + response * document.getElementById('pg2Input').value + ' HUF'}

}












function p32() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CZK;
document.getElementById('output31').innerHTML = 'your input <b>X</b> (times) EUR/CZK current exchange rate: ' + response * document.getElementById('pg2Input').value + ' CZK'}

}










function p33() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.ILS;
document.getElementById('output32').innerHTML = 'your input <b>X</b> (times) EUR/ILS current exchange rate: ' + response * document.getElementById('pg2Input').value + ' ILS'}

}












function p34() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CLP;
document.getElementById('output33').innerHTML = 'your input <b>X</b> (times) EUR/CLP current exchange rate: ' + response * document.getElementById('pg2Input').value + ' CLP'}

}












function p35() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.PHP;
document.getElementById('output34').innerHTML = 'your input <b>X</b> (times) EUR/PHP current exchange rate: ' + response * document.getElementById('pg2Input').value + ' PHP'}

}











function p36() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.AED;
document.getElementById('output35').innerHTML = 'your input <b>X</b> (times) EUR/AED current exchange rate: ' + response * document.getElementById('pg2Input').value + ' AED'}

}











function p37() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.COP;
document.getElementById('output36').innerHTML = 'your input <b>+</b> (plus) EUR/COP current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' COP'}

}












function p38() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.SAR;
document.getElementById('output37').innerHTML = 'your input <b>+</b> (plus) EUR/SAR current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' SAR'}

}











function p39() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.MYR;
document.getElementById('output38').innerHTML = 'your input <b>+</b> (plus) EUR/MYR current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' MYR'}

}











function p40() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.RON;
document.getElementById('output39').innerHTML = 'your input <b>+</b> (plus) EUR/RON current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' RON'}

}













function p41() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.AUD;
document.getElementById('output40').innerHTML = 'your input <b>+</b> (plus) EUR/AUD current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' AUD'}

}












function p42() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CAD;
document.getElementById('output41').innerHTML = 'your input <b>+</b> (plus) EUR/CAD current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' CAD'}

}











function p43() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CHF;
document.getElementById('output42').innerHTML = 'your input <b>+</b> (plus) EUR/CHF current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' CHF'}

}












function p44() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.CNY;
document.getElementById('output43').innerHTML = 'your input <b>+</b> (plus) EUR/CNY current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' CNY'}

}











function p45() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.HKD;
document.getElementById('output44').innerHTML = 'your input <b>+</b> (plus) EUR/HKD current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' HKD'}

}













function p46() {
   var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.NZD;
document.getElementById('output45').innerHTML = 'your input <b>+</b> (plus) EUR/NZD current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' NZD'}

}












function p47() {
    var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.SEK;
document.getElementById('output46').innerHTML = 'your input <b>+</b> (plus) EUR/SEK current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' SEK'}

}









function p48() {
     var requestURL = 'https://api.exchangerate.host/latest';
   var request = new XMLHttpRequest();
  request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response.rates.KRW;
document.getElementById('output47').innerHTML = 'your input <b>+</b> (plus) EUR/KRW current exchange rate: ' + parseFloat(parseFloat(response)  +  parseFloat(document.getElementById('pg2Input').value)) + ' KRW'}

}



























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//store first 10 user inputs and their results in a string to be written into JSON file later on

var userInteractionData1 = '';
var userInteractionData2 = '';
var userInteractionData3 = '';
var userInteractionData4 = '';
var userInteractionData5 = '';
var userInteractionData6 = '';
var userInteractionData7 = '';
var userInteractionData8 = '';
var userInteractionData9 = '';
var userInteractionData10= '';



function addValuesToString() {


if(userInteractionData1.length ==0)               {
  userInteractionData1=document.getElementById('pg2Input').value;
  console.log(userInteractionData1+" <---- is the user's 1st input");

  function assignDataToVars() {
userInteractionData1_output_value_of_p1 =document.getElementById('output1').innerHTML;
  userInteractionData1_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData1_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData1_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData1_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData1_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData1_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData1_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData1_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData1_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData1_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData1_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData1_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData1_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData1_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData1_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData1_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData1_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData1_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData1_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData1_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData1_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData1_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData1_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData1_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData1_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData1_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData1_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData1_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData1_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData1_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData1_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData1_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData1_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData1_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData1_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData1_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData1_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData1_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData1_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData1_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData1_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData1_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData1_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData1_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData1_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData1_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData1_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData1_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData1_output_value_of_p50=document.getElementById('output50').innerHTML;
  }

setTimeout(assignDataToVars, 1000);






                                                   }
else {
  FunctionForData2();
     }

                               }








function FunctionForData2() {

  if(userInteractionData2.length==0)               {
    userInteractionData2=document.getElementById('pg2Input').value;
  console.log(userInteractionData2+" <---- is the user's 2nd input");
    userInteractionData2_output_value_of_p1 =document.getElementById('output1').innerHTML;
userInteractionData2_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData2_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData2_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData2_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData2_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData2_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData2_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData2_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData2_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData2_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData2_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData2_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData2_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData2_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData2_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData2_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData2_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData2_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData2_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData2_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData2_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData2_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData2_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData2_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData2_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData2_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData2_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData2_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData2_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData2_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData2_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData2_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData2_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData2_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData2_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData2_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData2_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData2_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData2_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData2_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData2_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData2_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData2_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData2_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData2_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData2_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData2_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData2_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData2_output_value_of_p50=document.getElementById('output50').innerHTML;

                                                    }

  else {
  FunctionForData3();
     }

                           }



function FunctionForData3() {

  if(userInteractionData3.length==0)               {
    userInteractionData3=document.getElementById('pg2Input').value;
  console.log(userInteractionData3+" <---- is the user's 3rd input");
     userInteractionData3_output_value_of_p1 =document.getElementById('output1').innerHTML;

  userInteractionData3_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData3_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData3_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData3_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData3_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData3_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData3_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData3_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData3_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData3_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData3_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData3_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData3_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData3_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData3_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData3_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData3_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData3_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData3_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData3_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData3_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData3_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData3_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData3_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData3_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData3_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData3_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData3_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData3_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData3_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData3_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData3_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData3_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData3_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData3_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData3_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData3_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData3_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData3_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData3_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData3_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData3_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData3_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData3_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData3_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData3_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData3_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData3_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData3_output_value_of_p50=document.getElementById('output50').innerHTML;
                                                    }

  else {
  FunctionForData4();
     }

                           }



function FunctionForData4() {

  if(userInteractionData4.length==0)               {
    userInteractionData4=document.getElementById('pg2Input').value;
  console.log(userInteractionData4+" <---- is the user's 4th input");
    userInteractionData4_output_value_of_p1 =document.getElementById('output1').innerHTML;
   userInteractionData4_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData4_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData4_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData4_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData4_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData4_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData4_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData4_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData4_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData4_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData4_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData4_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData4_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData4_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData4_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData4_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData4_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData4_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData4_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData4_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData4_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData4_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData4_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData4_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData4_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData4_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData4_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData4_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData4_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData4_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData4_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData4_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData4_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData4_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData4_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData4_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData4_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData4_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData4_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData4_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData4_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData4_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData4_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData4_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData4_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData4_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData4_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData4_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData4_output_value_of_p50=document.getElementById('output50').innerHTML;

                                                    }

  else {
  FunctionForData5();
     }

                           }


function FunctionForData5() {

  if(userInteractionData5.length==0)               {
    userInteractionData5=document.getElementById('pg2Input').value;
  console.log(userInteractionData5+" <---- is the user's 5th input");
   userInteractionData5_output_value_of_p1 =document.getElementById('output1').innerHTML;
userInteractionData5_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData5_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData5_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData5_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData5_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData5_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData5_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData5_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData5_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData5_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData5_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData5_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData5_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData5_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData5_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData5_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData5_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData5_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData5_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData5_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData5_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData5_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData5_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData5_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData5_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData5_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData5_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData5_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData5_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData5_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData5_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData5_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData5_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData5_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData5_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData5_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData5_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData5_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData5_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData5_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData5_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData5_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData5_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData5_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData5_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData5_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData5_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData5_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData5_output_value_of_p50=document.getElementById('output50').innerHTML;

                                                    }

  else {
  FunctionForData6();
     }

                           }





function FunctionForData6() {

  if(userInteractionData6.length==0)               {
    userInteractionData6=document.getElementById('pg2Input').value;
  console.log(userInteractionData6+" <---- is the user's 6th input");
   userInteractionData6_output_value_of_p1 =document.getElementById('output1').innerHTML;
    userInteractionData6_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData6_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData6_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData6_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData6_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData6_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData6_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData6_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData6_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData6_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData6_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData6_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData6_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData6_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData6_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData6_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData6_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData6_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData6_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData6_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData6_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData6_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData6_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData6_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData6_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData6_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData6_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData6_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData6_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData6_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData6_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData6_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData6_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData6_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData6_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData6_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData6_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData6_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData6_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData6_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData6_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData6_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData6_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData6_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData6_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData6_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData6_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData6_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData6_output_value_of_p50=document.getElementById('output50').innerHTML;






                                                    }

  else {
  FunctionForData7();
     }

                           }



function FunctionForData7() {

  if(userInteractionData7.length==0)               {
    userInteractionData7=document.getElementById('pg2Input').value;
  console.log(userInteractionData7+" <---- is the user's 7th input");
   userInteractionData7_output_value_of_p1 =document.getElementById('output1').innerHTML;
    userInteractionData7_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData7_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData7_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData7_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData7_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData7_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData7_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData7_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData7_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData7_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData7_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData7_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData7_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData7_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData7_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData7_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData7_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData7_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData7_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData7_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData7_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData7_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData7_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData7_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData7_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData7_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData7_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData7_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData7_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData7_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData7_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData7_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData7_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData7_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData7_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData7_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData7_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData7_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData7_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData7_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData7_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData7_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData7_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData7_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData7_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData7_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData7_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData7_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData7_output_value_of_p50=document.getElementById('output50').innerHTML;
                                                    }

  else {
  FunctionForData8();
     }

                           }

function FunctionForData8() {

  if(userInteractionData8.length==0)               {
    userInteractionData8=document.getElementById('pg2Input').value;
  console.log(userInteractionData8+" <---- is the user's 8th input");
    userInteractionData8_output_value_of_p1 =document.getElementById('output1').innerHTML;
  userInteractionData8_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData8_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData8_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData8_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData8_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData8_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData8_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData8_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData8_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData8_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData8_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData8_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData8_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData8_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData8_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData8_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData8_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData8_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData8_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData8_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData8_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData8_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData8_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData8_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData8_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData8_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData8_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData8_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData8_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData8_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData8_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData8_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData8_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData8_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData8_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData8_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData8_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData8_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData8_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData8_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData8_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData8_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData8_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData8_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData8_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData8_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData8_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData8_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData8_output_value_of_p50=document.getElementById('output50').innerHTML;
                                                    }

  else {
  FunctionForData9();
     }

                           }


function FunctionForData9() {

  if(userInteractionData9.length==0)               {
    userInteractionData9=document.getElementById('pg2Input').value;
  console.log(userInteractionData9+" <---- is the user's 9th input");
    userInteractionData9_output_value_of_p1 =document.getElementById('output1').innerHTML;
   userInteractionData9_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData9_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData9_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData9_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData9_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData9_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData9_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData9_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData9_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData9_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData9_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData9_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData9_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData9_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData9_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData9_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData9_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData9_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData9_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData9_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData9_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData9_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData9_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData9_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData9_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData9_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData9_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData9_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData9_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData9_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData9_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData9_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData9_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData9_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData9_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData9_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData9_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData9_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData9_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData9_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData9_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData9_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData9_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData9_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData9_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData9_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData9_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData9_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData9_output_value_of_p50=document.getElementById('output50').innerHTML;
                                                    }

  else {
  FunctionForData10();
     }

                           }


function FunctionForData10() {

  if(userInteractionData10.length==0)               {
    userInteractionData10=document.getElementById('pg2Input').value;
  console.log(userInteractionData10+" <---- is the user's 10th input");
    userInteractionData10_output_value_of_p1 =document.getElementById('output1').innerHTML;
   userInteractionData10_output_value_of_p2=document.getElementById('output2').innerHTML;
  userInteractionData10_output_value_of_p3=document.getElementById('output3').innerHTML;
  userInteractionData10_output_value_of_p4=document.getElementById('output4').innerHTML;
  userInteractionData10_output_value_of_p5=document.getElementById('output5').innerHTML;
  userInteractionData10_output_value_of_p6=document.getElementById('output6').innerHTML;
  userInteractionData10_output_value_of_p7=document.getElementById('output7').innerHTML;
  userInteractionData10_output_value_of_p8=document.getElementById('output8').innerHTML;
  userInteractionData10_output_value_of_p9=document.getElementById('output9').innerHTML;
userInteractionData10_output_value_of_p10=document.getElementById('output10').innerHTML;
userInteractionData10_output_value_of_p11=document.getElementById('output11').innerHTML;
userInteractionData10_output_value_of_p12=document.getElementById('output12').innerHTML;
userInteractionData10_output_value_of_p13=document.getElementById('output13').innerHTML;
userInteractionData10_output_value_of_p14=document.getElementById('output14').innerHTML;
userInteractionData10_output_value_of_p15=document.getElementById('output15').innerHTML;
userInteractionData10_output_value_of_p16=document.getElementById('output16').innerHTML;
userInteractionData10_output_value_of_p17=document.getElementById('output17').innerHTML;
userInteractionData10_output_value_of_p18=document.getElementById('output18').innerHTML;
userInteractionData10_output_value_of_p19=document.getElementById('output19').innerHTML;
userInteractionData10_output_value_of_p20=document.getElementById('output20').innerHTML;
userInteractionData10_output_value_of_p21=document.getElementById('output21').innerHTML;
userInteractionData10_output_value_of_p22=document.getElementById('output22').innerHTML;
userInteractionData10_output_value_of_p23=document.getElementById('output23').innerHTML;
userInteractionData10_output_value_of_p24=document.getElementById('output24').innerHTML;
userInteractionData10_output_value_of_p25=document.getElementById('output25').innerHTML;
userInteractionData10_output_value_of_p26=document.getElementById('output26').innerHTML;
userInteractionData10_output_value_of_p27=document.getElementById('output27').innerHTML;
userInteractionData10_output_value_of_p28=document.getElementById('output28').innerHTML;
userInteractionData10_output_value_of_p29=document.getElementById('output29').innerHTML;
userInteractionData10_output_value_of_p30=document.getElementById('output30').innerHTML;
userInteractionData10_output_value_of_p31=document.getElementById('output31').innerHTML;
userInteractionData10_output_value_of_p32=document.getElementById('output32').innerHTML;
userInteractionData10_output_value_of_p33=document.getElementById('output33').innerHTML;
userInteractionData10_output_value_of_p34=document.getElementById('output34').innerHTML;
userInteractionData10_output_value_of_p35=document.getElementById('output35').innerHTML;
userInteractionData10_output_value_of_p36=document.getElementById('output36').innerHTML;
userInteractionData10_output_value_of_p37=document.getElementById('output37').innerHTML;
userInteractionData10_output_value_of_p38=document.getElementById('output38').innerHTML;
userInteractionData10_output_value_of_p39=document.getElementById('output39').innerHTML;
userInteractionData10_output_value_of_p40=document.getElementById('output40').innerHTML;
userInteractionData10_output_value_of_p41=document.getElementById('output41').innerHTML;
userInteractionData10_output_value_of_p42=document.getElementById('output42').innerHTML;
userInteractionData10_output_value_of_p43=document.getElementById('output43').innerHTML;
userInteractionData10_output_value_of_p44=document.getElementById('output44').innerHTML;
userInteractionData10_output_value_of_p45=document.getElementById('output45').innerHTML;
userInteractionData10_output_value_of_p46=document.getElementById('output46').innerHTML;
userInteractionData10_output_value_of_p47=document.getElementById('output47').innerHTML;
userInteractionData10_output_value_of_p48=document.getElementById('output48').innerHTML;
userInteractionData10_output_value_of_p49=document.getElementById('output49').innerHTML;
  userInteractionData10_output_value_of_p50=document.getElementById('output50').innerHTML;
    setTimeout(console.log(userInteractionData1+","+userInteractionData2+","+userInteractionData3+","+userInteractionData4+","+userInteractionData5+","+userInteractionData6+","+userInteractionData7+","+userInteractionData8+","+userInteractionData9+","+userInteractionData10+ " <---- all first 10 inputs of the user"),1000);
document.getElementById('getJSONData').style.opacity='1';
    createJSONDataFileForUser();
    document.getElementById('getJSONDataButton').addEventListener('click', giveJSONDataFileToUser);
                                                    }

                           }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--END--OF-- store first 10 user inputs and their results in a string to be written into JSON file later on





//pre-call
function pre_call() {

fetch('https://api.exchangerate.host/latest')
.then(response => { console.log('pre-call has been successfully made, now running API functons in 600 miliseconds please wait') ; setTimeout(pALL,600)       })

.catch(error => {console.error('ERROR: There has been an error communicating with the API provider servers. Please check your internet connection. It may also be an error caused by the API provider.'); })


}










//calling all API functions
function pALL() {



  p1();  p2(); p3();p4();  p5();p6();  p7();p8();p9();p10();p11();p12();p13();p14();p15();p16();p17();p18();p19();p20();p21();p22();
p23();p24();p25();p26();p27();p28();p29();p30();p31();p32();p33();p34();p35();p36();p37();p38();p39();p40();p41();p42();p43();p44();p45();p46();p47();p48();



}


//buttonClicked
function btnClick() {

  alert('just a friendly reminder, please check your internet connection because if you are not connected, you won\'t see any results I\'m afraid. thanks. This pop-up shows up even if you are connected to the internet so don\'t mind me.');

//print input as output
var inputValue= document.getElementById('pg2Input').value;
  document.getElementById('output1').innerHTML='your input is: '+parseFloat(inputValue);console.log('user entered ---> \" '+inputValue+' \" as input');
if(document.getElementById('output2').innerText.length<document.getElementById('output1').innerText.length) {
  document.getElementById('output2').innerHTML='///could not connect to external server...Please refresh the page.';
}






  //pre-API connection for reliability of output (then will start normal functions)
pre_call();





















  //if input is not an integer give error:


  function errorTXT() {
  document.getElementById('output1').innerHTML='ERROR';  document.getElementById('output2').innerHTML='ERROR';
    document.getElementById('output3').innerHTML='ERROR';  document.getElementById('output4').innerHTML='ERROR';
      document.getElementById('output5').innerHTML='ERROR';  document.getElementById('output6').innerHTML='ERROR';
    document.getElementById('output7').innerHTML='ERROR';  document.getElementById('output8').innerHTML='ERROR';
    document.getElementById('output9').innerHTML='ERROR';  document.getElementById('output10').innerHTML='ERROR';
    document.getElementById('output11').innerHTML='ERROR';  document.getElementById('output12').innerHTML='ERROR';
    document.getElementById('output13').innerHTML='ERROR';  document.getElementById('output14').innerHTML='ERROR';
    document.getElementById('output15').innerHTML='ERROR';  document.getElementById('output16').innerHTML='ERROR';
    document.getElementById('output17').innerHTML='ERROR';  document.getElementById('output18').innerHTML='ERROR';
    document.getElementById('output19').innerHTML='ERROR';  document.getElementById('output20').innerHTML='ERROR';
      document.getElementById('output21').innerHTML='ERROR';  document.getElementById('output22').innerHTML='ERROR';
        document.getElementById('output23').innerHTML='ERROR';  document.getElementById('output24').innerHTML='ERROR'; document.getElementById('output25').innerHTML='ERROR';
  document.getElementById('output26').innerHTML='ERROR';  document.getElementById('output27').innerHTML='ERROR';

  document.getElementById('output28').innerHTML='ERROR';  document.getElementById('output29').innerHTML='ERROR';

  document.getElementById('output30').innerHTML='ERROR';  document.getElementById('output31').innerHTML='ERROR';

  document.getElementById('output32').innerHTML='ERROR';  document.getElementById('output33').innerHTML='ERROR';

  document.getElementById('output34').innerHTML='ERROR';  document.getElementById('output35').innerHTML='ERROR';

  document.getElementById('output36').innerHTML='ERROR';  document.getElementById('output37').innerHTML='ERROR';

  document.getElementById('output38').innerHTML='ERROR';  document.getElementById('output39').innerHTML='ERROR';

  document.getElementById('output40').innerHTML='ERROR';  document.getElementById('output41').innerHTML='ERROR';

  document.getElementById('output42').innerHTML='ERROR';  document.getElementById('output43').innerHTML='ERROR';

  document.getElementById('output44').innerHTML='ERROR';  document.getElementById('output45').innerHTML='ERROR';

  document.getElementById('output46').innerHTML='ERROR';  document.getElementById('output47').innerHTML='ERROR';

  document.getElementById('output48').innerHTML='ERROR';   document.getElementById('output49').innerHTML='ERROR';
  document.getElementById('output50').innerHTML='ERROR';


                      }





if(isNaN(inputValue) || inputValue.length==0) {
  alert('input value is NOT integer');
setTimeout(errorTXT, 1000);

   }

if(inputValue.includes('when')){

document.getElementById('warningOfQuestionEntered').innerHTML='Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

}



  if(inputValue.includes('where')){

document.getElementById('warningOfQuestionEntered').innerHTML='Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

}

if(inputValue.includes('what')){

document.getElementById('warningOfQuestionEntered').innerHTML='Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

}



  if(inputValue.includes('how')){

document.getElementById('warningOfQuestionEntered').innerHTML='Are you trying to ask me questions or what? Please only enter numbers I\'m not that smart\.';

}


  if(!inputValue.includes('how') && !inputValue.includes('when') && !inputValue.includes('where') && !inputValue.includes('what')){

document.getElementById('warningOfQuestionEntered').innerHTML='';

}




}




var userInteractionData1_output_value_of_p1='empty'; var userInteractionData1_output_value_of_p2='empty';var userInteractionData1_output_value_of_p3='empty';
var userInteractionData1_output_value_of_p4='empty';var userInteractionData1_output_value_of_p5='empty';var userInteractionData1_output_value_of_p6='empty';
var userInteractionData1_output_value_of_p7='empty';var userInteractionData1_output_value_of_p8='empty';var userInteractionData1_output_value_of_p9='empty';
var userInteractionData1_output_value_of_p10='empty';var userInteractionData1_output_value_of_p11='empty';var userInteractionData1_output_value_of_p12='empty';
var userInteractionData1_output_value_of_p13='empty';var userInteractionData1_output_value_of_p14='empty';var userInteractionData1_output_value_of_p15='empty';
var userInteractionData1_output_value_of_p16='empty';var userInteractionData1_output_value_of_p17='empty';var userInteractionData1_output_value_of_p18='empty';
var userInteractionData1_output_value_of_p19='empty';var userInteractionData1_output_value_of_p20='empty';var userInteractionData1_output_value_of_p21='empty';
var userInteractionData1_output_value_of_p22='empty';var userInteractionData1_output_value_of_p23='empty';var userInteractionData1_output_value_of_p24='empty';
var userInteractionData1_output_value_of_p25='empty';var userInteractionData1_output_value_of_p26='empty';var userInteractionData1_output_value_of_p27='empty';
var userInteractionData1_output_value_of_p28='empty';var userInteractionData1_output_value_of_p29='empty';var userInteractionData1_output_value_of_p30='empty';
var userInteractionData1_output_value_of_p31='empty';var userInteractionData1_output_value_of_p32='empty';var userInteractionData1_output_value_of_p33='empty';
var userInteractionData1_output_value_of_p34='empty';var userInteractionData1_output_value_of_p35='empty';var userInteractionData1_output_value_of_p36='empty';
var userInteractionData1_output_value_of_p37='empty';var userInteractionData1_output_value_of_p38='empty';var userInteractionData1_output_value_of_p39='empty';
var userInteractionData1_output_value_of_p40='empty';var userInteractionData1_output_value_of_p41='empty';var userInteractionData1_output_value_of_p42='empty';
var userInteractionData1_output_value_of_p43='empty';var userInteractionData1_output_value_of_p44='empty';var userInteractionData1_output_value_of_p45='empty';
var userInteractionData1_output_value_of_p46='empty';var userInteractionData1_output_value_of_p47='empty';var userInteractionData1_output_value_of_p48='empty';
var userInteractionData1_output_value_of_p49='empty';var userInteractionData1_output_value_of_p50='empty';

var userInteractionData2_output_value_of_p1='empty';   var userInteractionData2_output_value_of_p2='empty';var userInteractionData2_output_value_of_p3='empty';
var userInteractionData2_output_value_of_p4='empty';var userInteractionData2_output_value_of_p5='empty';var userInteractionData2_output_value_of_p6='empty';
var userInteractionData2_output_value_of_p7='empty';var userInteractionData2_output_value_of_p8='empty';var userInteractionData2_output_value_of_p9='empty';
var userInteractionData2_output_value_of_p10='empty';var userInteractionData2_output_value_of_p11='empty';var userInteractionData2_output_value_of_p12='empty';
var userInteractionData2_output_value_of_p13='empty';var userInteractionData2_output_value_of_p14='empty';var userInteractionData2_output_value_of_p15='empty';
var userInteractionData2_output_value_of_p16='empty';var userInteractionData2_output_value_of_p17='empty';var userInteractionData2_output_value_of_p18='empty';
var userInteractionData2_output_value_of_p19='empty';var userInteractionData2_output_value_of_p20='empty';var userInteractionData2_output_value_of_p21='empty';
var userInteractionData2_output_value_of_p22='empty';var userInteractionData2_output_value_of_p23='empty';var userInteractionData2_output_value_of_p24='empty';
var userInteractionData2_output_value_of_p25='empty';var userInteractionData2_output_value_of_p26='empty';var userInteractionData2_output_value_of_p27='empty';
var userInteractionData2_output_value_of_p28='empty';var userInteractionData2_output_value_of_p29='empty';var userInteractionData2_output_value_of_p30='empty';
var userInteractionData2_output_value_of_p31='empty';var userInteractionData2_output_value_of_p32='empty';var userInteractionData2_output_value_of_p33='empty';
var userInteractionData2_output_value_of_p34='empty';var userInteractionData2_output_value_of_p35='empty';var userInteractionData2_output_value_of_p36='empty';
var userInteractionData2_output_value_of_p37='empty';var userInteractionData2_output_value_of_p38='empty';var userInteractionData2_output_value_of_p39='empty';
var userInteractionData2_output_value_of_p40='empty';var userInteractionData2_output_value_of_p41='empty';var userInteractionData2_output_value_of_p42='empty';
var userInteractionData2_output_value_of_p43='empty';var userInteractionData2_output_value_of_p44='empty';var userInteractionData2_output_value_of_p45='empty';
var userInteractionData2_output_value_of_p46='empty';var userInteractionData2_output_value_of_p47='empty';var userInteractionData2_output_value_of_p48='empty';
var userInteractionData2_output_value_of_p49='empty';var userInteractionData2_output_value_of_p50='empty';

var userInteractionData3_output_value_of_p1='empty';  var userInteractionData3_output_value_of_p2='empty';var userInteractionData3_output_value_of_p3='empty';
var userInteractionData3_output_value_of_p4='empty';var userInteractionData3_output_value_of_p5='empty';var userInteractionData3_output_value_of_p6='empty';
var userInteractionData3_output_value_of_p7='empty';var userInteractionData3_output_value_of_p8='empty';var userInteractionData3_output_value_of_p9='empty';
var userInteractionData3_output_value_of_p10='empty';var userInteractionData3_output_value_of_p11='empty';var userInteractionData3_output_value_of_p12='empty';
var userInteractionData3_output_value_of_p13='empty';var userInteractionData3_output_value_of_p14='empty';var userInteractionData3_output_value_of_p15='empty';
var userInteractionData3_output_value_of_p16='empty';var userInteractionData3_output_value_of_p17='empty';var userInteractionData3_output_value_of_p18='empty';
var userInteractionData3_output_value_of_p19='empty';var userInteractionData3_output_value_of_p20='empty';var userInteractionData3_output_value_of_p21='empty';
var userInteractionData3_output_value_of_p22='empty';var userInteractionData3_output_value_of_p23='empty';var userInteractionData3_output_value_of_p24='empty';
var userInteractionData3_output_value_of_p25='empty';var userInteractionData3_output_value_of_p26='empty';var userInteractionData3_output_value_of_p27='empty';
var userInteractionData3_output_value_of_p28='empty';var userInteractionData3_output_value_of_p29='empty';var userInteractionData3_output_value_of_p30='empty';
var userInteractionData3_output_value_of_p31='empty';var userInteractionData3_output_value_of_p32='empty';var userInteractionData3_output_value_of_p33='empty';
var userInteractionData3_output_value_of_p34='empty';var userInteractionData3_output_value_of_p35='empty';var userInteractionData3_output_value_of_p36='empty';
var userInteractionData3_output_value_of_p37='empty';var userInteractionData3_output_value_of_p38='empty';var userInteractionData3_output_value_of_p39='empty';
var userInteractionData3_output_value_of_p40='empty';var userInteractionData3_output_value_of_p41='empty';var userInteractionData3_output_value_of_p42='empty';
var userInteractionData3_output_value_of_p43='empty';var userInteractionData3_output_value_of_p44='empty';var userInteractionData3_output_value_of_p45='empty';
var userInteractionData3_output_value_of_p46='empty';var userInteractionData3_output_value_of_p47='empty';var userInteractionData3_output_value_of_p48='empty';
var userInteractionData3_output_value_of_p49='empty';var userInteractionData3_output_value_of_p50='empty';

var userInteractionData4_output_value_of_p1='empty';  var userInteractionData4_output_value_of_p2='empty';var userInteractionData4_output_value_of_p3='empty';
var userInteractionData4_output_value_of_p4='empty';var userInteractionData4_output_value_of_p5='empty';var userInteractionData4_output_value_of_p6='empty';
var userInteractionData4_output_value_of_p7='empty';var userInteractionData4_output_value_of_p8='empty';var userInteractionData4_output_value_of_p9='empty';
var userInteractionData4_output_value_of_p10='empty';var userInteractionData4_output_value_of_p11='empty';var userInteractionData4_output_value_of_p12='empty';
var userInteractionData4_output_value_of_p13='empty';var userInteractionData4_output_value_of_p14='empty';var userInteractionData4_output_value_of_p15='empty';
var userInteractionData4_output_value_of_p16='empty';var userInteractionData4_output_value_of_p17='empty';var userInteractionData4_output_value_of_p18='empty';
var userInteractionData4_output_value_of_p19='empty';var userInteractionData4_output_value_of_p20='empty';var userInteractionData4_output_value_of_p21='empty';
var userInteractionData4_output_value_of_p22='empty';var userInteractionData4_output_value_of_p23='empty';var userInteractionData4_output_value_of_p24='empty';
var userInteractionData4_output_value_of_p25='empty';var userInteractionData4_output_value_of_p26='empty';var userInteractionData4_output_value_of_p27='empty';
var userInteractionData4_output_value_of_p28='empty';var userInteractionData4_output_value_of_p29='empty';var userInteractionData4_output_value_of_p30='empty';
var userInteractionData4_output_value_of_p31='empty';var userInteractionData4_output_value_of_p32='empty';var userInteractionData4_output_value_of_p33='empty';
var userInteractionData4_output_value_of_p34='empty';var userInteractionData4_output_value_of_p35='empty';var userInteractionData4_output_value_of_p36='empty';
var userInteractionData4_output_value_of_p37='empty';var userInteractionData4_output_value_of_p38='empty';var userInteractionData4_output_value_of_p39='empty';
var userInteractionData4_output_value_of_p40='empty';var userInteractionData4_output_value_of_p41='empty';var userInteractionData4_output_value_of_p42='empty';
var userInteractionData4_output_value_of_p43='empty';var userInteractionData4_output_value_of_p44='empty';var userInteractionData4_output_value_of_p45='empty';
var userInteractionData4_output_value_of_p46='empty';var userInteractionData4_output_value_of_p47='empty';var userInteractionData4_output_value_of_p48='empty';
var userInteractionData4_output_value_of_p49='empty';var userInteractionData4_output_value_of_p50='empty';

var userInteractionData5_output_value_of_p1='empty';  var userInteractionData5_output_value_of_p2='empty';var userInteractionData5_output_value_of_p3='empty';
var userInteractionData5_output_value_of_p4='empty';var userInteractionData5_output_value_of_p5='empty';var userInteractionData5_output_value_of_p6='empty';
var userInteractionData5_output_value_of_p7='empty';var userInteractionData5_output_value_of_p8='empty';var userInteractionData5_output_value_of_p9='empty';
var userInteractionData5_output_value_of_p10='empty';var userInteractionData5_output_value_of_p11='empty';var userInteractionData5_output_value_of_p12='empty';
var userInteractionData5_output_value_of_p13='empty';var userInteractionData5_output_value_of_p14='empty';var userInteractionData5_output_value_of_p15='empty';
var userInteractionData5_output_value_of_p16='empty';var userInteractionData5_output_value_of_p17='empty';var userInteractionData5_output_value_of_p18='empty';
var userInteractionData5_output_value_of_p19='empty';var userInteractionData5_output_value_of_p20='empty';var userInteractionData5_output_value_of_p21='empty';
var userInteractionData5_output_value_of_p22='empty';var userInteractionData5_output_value_of_p23='empty';var userInteractionData5_output_value_of_p24='empty';
var userInteractionData5_output_value_of_p25='empty';var userInteractionData5_output_value_of_p26='empty';var userInteractionData5_output_value_of_p27='empty';
var userInteractionData5_output_value_of_p28='empty';var userInteractionData5_output_value_of_p29='empty';var userInteractionData5_output_value_of_p30='empty';
var userInteractionData5_output_value_of_p31='empty';var userInteractionData5_output_value_of_p32='empty';var userInteractionData5_output_value_of_p33='empty';
var userInteractionData5_output_value_of_p34='empty';var userInteractionData5_output_value_of_p35='empty';var userInteractionData5_output_value_of_p36='empty';
var userInteractionData5_output_value_of_p37='empty';var userInteractionData5_output_value_of_p38='empty';var userInteractionData5_output_value_of_p39='empty';
var userInteractionData5_output_value_of_p40='empty';var userInteractionData5_output_value_of_p41='empty';var userInteractionData5_output_value_of_p42='empty';
var userInteractionData5_output_value_of_p43='empty';var userInteractionData5_output_value_of_p44='empty';var userInteractionData5_output_value_of_p45='empty';
var userInteractionData5_output_value_of_p46='empty';var userInteractionData5_output_value_of_p47='empty';var userInteractionData5_output_value_of_p48='empty';
var userInteractionData5_output_value_of_p49='empty';var userInteractionData5_output_value_of_p50='empty';

var userInteractionData6_output_value_of_p1='empty';   var userInteractionData6_output_value_of_p2='empty';var userInteractionData6_output_value_of_p3='empty';
var userInteractionData6_output_value_of_p4='empty';var userInteractionData6_output_value_of_p5='empty';var userInteractionData6_output_value_of_p6='empty';
var userInteractionData6_output_value_of_p7='empty';var userInteractionData6_output_value_of_p8='empty';var userInteractionData6_output_value_of_p9='empty';
var userInteractionData6_output_value_of_p10='empty';var userInteractionData6_output_value_of_p11='empty';var userInteractionData6_output_value_of_p12='empty';
var userInteractionData6_output_value_of_p13='empty';var userInteractionData6_output_value_of_p14='empty';var userInteractionData6_output_value_of_p15='empty';
var userInteractionData6_output_value_of_p16='empty';var userInteractionData6_output_value_of_p17='empty';var userInteractionData6_output_value_of_p18='empty';
var userInteractionData6_output_value_of_p19='empty';var userInteractionData6_output_value_of_p20='empty';var userInteractionData6_output_value_of_p21='empty';
var userInteractionData6_output_value_of_p22='empty';var userInteractionData6_output_value_of_p23='empty';var userInteractionData6_output_value_of_p24='empty';
var userInteractionData6_output_value_of_p25='empty';var userInteractionData6_output_value_of_p26='empty';var userInteractionData6_output_value_of_p27='empty';
var userInteractionData6_output_value_of_p28='empty';var userInteractionData6_output_value_of_p29='empty';var userInteractionData6_output_value_of_p30='empty';
var userInteractionData6_output_value_of_p31='empty';var userInteractionData6_output_value_of_p32='empty';var userInteractionData6_output_value_of_p33='empty';
var userInteractionData6_output_value_of_p34='empty';var userInteractionData6_output_value_of_p35='empty';var userInteractionData6_output_value_of_p36='empty';
var userInteractionData6_output_value_of_p37='empty';var userInteractionData6_output_value_of_p38='empty';var userInteractionData6_output_value_of_p39='empty';
var userInteractionData6_output_value_of_p40='empty';var userInteractionData6_output_value_of_p41='empty';var userInteractionData6_output_value_of_p42='empty';
var userInteractionData6_output_value_of_p43='empty';var userInteractionData6_output_value_of_p44='empty';var userInteractionData6_output_value_of_p45='empty';
var userInteractionData6_output_value_of_p46='empty';var userInteractionData6_output_value_of_p47='empty';var userInteractionData6_output_value_of_p48='empty';
var userInteractionData6_output_value_of_p49='empty';var userInteractionData6_output_value_of_p50='empty';

var userInteractionData7_output_value_of_p1='empty';  var userInteractionData7_output_value_of_p2='empty';var userInteractionData7_output_value_of_p3='empty';
var userInteractionData7_output_value_of_p4='empty';var userInteractionData7_output_value_of_p5='empty';var userInteractionData7_output_value_of_p6='empty';
var userInteractionData7_output_value_of_p7='empty';var userInteractionData7_output_value_of_p8='empty';var userInteractionData7_output_value_of_p9='empty';
var userInteractionData7_output_value_of_p10='empty';var userInteractionData7_output_value_of_p11='empty';var userInteractionData7_output_value_of_p12='empty';
var userInteractionData7_output_value_of_p13='empty';var userInteractionData7_output_value_of_p14='empty';var userInteractionData7_output_value_of_p15='empty';
var userInteractionData7_output_value_of_p16='empty';var userInteractionData7_output_value_of_p17='empty';var userInteractionData7_output_value_of_p18='empty';
var userInteractionData7_output_value_of_p19='empty';var userInteractionData7_output_value_of_p20='empty';var userInteractionData7_output_value_of_p21='empty';
var userInteractionData7_output_value_of_p22='empty';var userInteractionData7_output_value_of_p23='empty';var userInteractionData7_output_value_of_p24='empty';
var userInteractionData7_output_value_of_p25='empty';var userInteractionData7_output_value_of_p26='empty';var userInteractionData7_output_value_of_p27='empty';
var userInteractionData7_output_value_of_p28='empty';var userInteractionData7_output_value_of_p29='empty';var userInteractionData7_output_value_of_p30='empty';
var userInteractionData7_output_value_of_p31='empty';var userInteractionData7_output_value_of_p32='empty';var userInteractionData7_output_value_of_p33='empty';
var userInteractionData7_output_value_of_p34='empty';var userInteractionData7_output_value_of_p35='empty';var userInteractionData7_output_value_of_p36='empty';
var userInteractionData7_output_value_of_p37='empty';var userInteractionData7_output_value_of_p38='empty';var userInteractionData7_output_value_of_p39='empty';
var userInteractionData7_output_value_of_p40='empty';var userInteractionData7_output_value_of_p41='empty';var userInteractionData7_output_value_of_p42='empty';
var userInteractionData7_output_value_of_p43='empty';var userInteractionData7_output_value_of_p44='empty';var userInteractionData7_output_value_of_p45='empty';
var userInteractionData7_output_value_of_p46='empty';var userInteractionData7_output_value_of_p47='empty';var userInteractionData7_output_value_of_p48='empty';
var userInteractionData7_output_value_of_p49='empty';var userInteractionData7_output_value_of_p50='empty';

var userInteractionData8_output_value_of_p1='empty';  var userInteractionData8_output_value_of_p2='empty';var userInteractionData8_output_value_of_p3='empty';
var userInteractionData8_output_value_of_p4='empty';var userInteractionData8_output_value_of_p5='empty';var userInteractionData8_output_value_of_p6='empty';
var userInteractionData8_output_value_of_p7='empty';var userInteractionData8_output_value_of_p8='empty';var userInteractionData8_output_value_of_p9='empty';
var userInteractionData8_output_value_of_p10='empty';var userInteractionData8_output_value_of_p11='empty';var userInteractionData8_output_value_of_p12='empty';
var userInteractionData8_output_value_of_p13='empty';var userInteractionData8_output_value_of_p14='empty';var userInteractionData8_output_value_of_p15='empty';
var userInteractionData8_output_value_of_p16='empty';var userInteractionData8_output_value_of_p17='empty';var userInteractionData8_output_value_of_p18='empty';
var userInteractionData8_output_value_of_p19='empty';var userInteractionData8_output_value_of_p20='empty';var userInteractionData8_output_value_of_p21='empty';
var userInteractionData8_output_value_of_p22='empty';var userInteractionData8_output_value_of_p23='empty';var userInteractionData8_output_value_of_p24='empty';
var userInteractionData8_output_value_of_p25='empty';var userInteractionData8_output_value_of_p26='empty';var userInteractionData8_output_value_of_p27='empty';
var userInteractionData8_output_value_of_p28='empty';var userInteractionData8_output_value_of_p29='empty';var userInteractionData8_output_value_of_p30='empty';
var userInteractionData8_output_value_of_p31='empty';var userInteractionData8_output_value_of_p32='empty';var userInteractionData8_output_value_of_p33='empty';
var userInteractionData8_output_value_of_p34='empty';var userInteractionData8_output_value_of_p35='empty';var userInteractionData8_output_value_of_p36='empty';
var userInteractionData8_output_value_of_p37='empty';var userInteractionData8_output_value_of_p38='empty';var userInteractionData8_output_value_of_p39='empty';
var userInteractionData8_output_value_of_p40='empty';var userInteractionData8_output_value_of_p41='empty';var userInteractionData8_output_value_of_p42='empty';
var userInteractionData8_output_value_of_p43='empty';var userInteractionData8_output_value_of_p44='empty';var userInteractionData8_output_value_of_p45='empty';
var userInteractionData8_output_value_of_p46='empty';var userInteractionData8_output_value_of_p47='empty';var userInteractionData8_output_value_of_p48='empty';
var userInteractionData8_output_value_of_p49='empty';var userInteractionData8_output_value_of_p50='empty';

var userInteractionData9_output_value_of_p1='empty';  var userInteractionData9_output_value_of_p2='empty';var userInteractionData9_output_value_of_p3='empty';
var userInteractionData9_output_value_of_p4='empty';var userInteractionData9_output_value_of_p5='empty';var userInteractionData9_output_value_of_p6='empty';
var userInteractionData9_output_value_of_p7='empty';var userInteractionData9_output_value_of_p8='empty';var userInteractionData9_output_value_of_p9='empty';
var userInteractionData9_output_value_of_p10='empty';var userInteractionData9_output_value_of_p11='empty';var userInteractionData9_output_value_of_p12='empty';
var userInteractionData9_output_value_of_p13='empty';var userInteractionData9_output_value_of_p14='empty';var userInteractionData9_output_value_of_p15='empty';
var userInteractionData9_output_value_of_p16='empty';var userInteractionData9_output_value_of_p17='empty';var userInteractionData9_output_value_of_p18='empty';
var userInteractionData9_output_value_of_p19='empty';var userInteractionData9_output_value_of_p20='empty';var userInteractionData9_output_value_of_p21='empty';
var userInteractionData9_output_value_of_p22='empty';var userInteractionData9_output_value_of_p23='empty';var userInteractionData9_output_value_of_p24='empty';
var userInteractionData9_output_value_of_p25='empty';var userInteractionData9_output_value_of_p26='empty';var userInteractionData9_output_value_of_p27='empty';
var userInteractionData9_output_value_of_p28='empty';var userInteractionData9_output_value_of_p29='empty';var userInteractionData9_output_value_of_p30='empty';
var userInteractionData9_output_value_of_p31='empty';var userInteractionData9_output_value_of_p32='empty';var userInteractionData9_output_value_of_p33='empty';
var userInteractionData9_output_value_of_p34='empty';var userInteractionData9_output_value_of_p35='empty';var userInteractionData9_output_value_of_p36='empty';
var userInteractionData9_output_value_of_p37='empty';var userInteractionData9_output_value_of_p38='empty';var userInteractionData9_output_value_of_p39='empty';
var userInteractionData9_output_value_of_p40='empty';var userInteractionData9_output_value_of_p41='empty';var userInteractionData9_output_value_of_p42='empty';
var userInteractionData9_output_value_of_p43='empty';var userInteractionData9_output_value_of_p44='empty';var userInteractionData9_output_value_of_p45='empty';
var userInteractionData9_output_value_of_p46='empty';var userInteractionData9_output_value_of_p47='empty';var userInteractionData9_output_value_of_p48='empty';
var userInteractionData9_output_value_of_p49='empty';var userInteractionData9_output_value_of_p50='empty';

var userInteractionData10_output_value_of_p1='empty';  var userInteractionData10_output_value_of_p2='empty';var userInteractionData10_output_value_of_p3='empty';
var userInteractionData10_output_value_of_p4='empty';var userInteractionData10_output_value_of_p5='empty';var userInteractionData10_output_value_of_p6='empty';
var userInteractionData10_output_value_of_p7='empty';var userInteractionData10_output_value_of_p8='empty';var userInteractionData10_output_value_of_p9='empty';
var userInteractionData10_output_value_of_p10='empty';var userInteractionData10_output_value_of_p11='empty';var userInteractionData10_output_value_of_p12='empty';
var userInteractionData10_output_value_of_p13='empty';var userInteractionData10_output_value_of_p14='empty';var userInteractionData10_output_value_of_p15='empty';
var userInteractionData10_output_value_of_p16='empty';var userInteractionData10_output_value_of_p17='empty';var userInteractionData10_output_value_of_p18='empty';
var userInteractionData10_output_value_of_p19='empty';var userInteractionData10_output_value_of_p20='empty';var userInteractionData10_output_value_of_p21='empty';
var userInteractionData10_output_value_of_p22='empty';var userInteractionData10_output_value_of_p23='empty';var userInteractionData10_output_value_of_p24='empty';
var userInteractionData10_output_value_of_p25='empty';var userInteractionData10_output_value_of_p26='empty';var userInteractionData10_output_value_of_p27='empty';
var userInteractionData10_output_value_of_p28='empty';var userInteractionData10_output_value_of_p29='empty';var userInteractionData10_output_value_of_p30='empty';
var userInteractionData10_output_value_of_p31='empty';var userInteractionData10_output_value_of_p32='empty';var userInteractionData10_output_value_of_p33='empty';
var userInteractionData10_output_value_of_p34='empty';var userInteractionData10_output_value_of_p35='empty';var userInteractionData10_output_value_of_p36='empty';
var userInteractionData10_output_value_of_p37='empty';var userInteractionData10_output_value_of_p38='empty';var userInteractionData10_output_value_of_p39='empty';
var userInteractionData10_output_value_of_p40='empty';var userInteractionData10_output_value_of_p41='empty';var userInteractionData10_output_value_of_p42='empty';
var userInteractionData10_output_value_of_p43='empty';var userInteractionData10_output_value_of_p44='empty';var userInteractionData10_output_value_of_p45='empty';
var userInteractionData10_output_value_of_p46='empty';var userInteractionData10_output_value_of_p47='empty';var userInteractionData10_output_value_of_p48='empty';
var userInteractionData10_output_value_of_p49='empty';var userInteractionData10_output_value_of_p50='empty';
