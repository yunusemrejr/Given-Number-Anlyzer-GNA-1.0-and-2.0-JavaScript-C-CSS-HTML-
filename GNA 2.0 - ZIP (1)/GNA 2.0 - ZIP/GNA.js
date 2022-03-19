//below function is for changing the CSS when the button is clicked. This is to hide the previous DIV and show the other DIV.
function RunFunction() {


document.getElementById('MainDiv').style.visibility = 'hidden';
document.getElementById('afterActionDiv').style.visibility = '';
document.getElementById('afterActionDiv').style.display = '';

}



//preloader for function 2
function RunFunctionTwoPRE() {

document.getElementById('bdy').style.display='none';
  document.getElementById('hone1').style.display='';
  setTimeout(honeAnimate1, 300);
    setTimeout(honeAnimate2, 400);
  setTimeout(honeAnimate3, 500);

    setTimeout(honeAnimate2, 600);
    setTimeout(honeAnimate1, 700);
  setTimeout(honeAnimate2, 800);
    setTimeout(honeAnimate3, 900);

      setTimeout(honeAnimate2, 1000);
    setTimeout(honeAnimate1, 1100);
  setTimeout(honeAnimate2, 1200);
    setTimeout(honeAnimate3, 1400);

        setTimeout(honeAnimate2, 1500);
    setTimeout(honeAnimate1, 1600);
  setTimeout(honeAnimate2, 1900);
    setTimeout(honeAnimate3, 2150);

  setTimeout(honeAnimate1, 2250);
    setTimeout(honeAnimate2, 2350);
  setTimeout(honeAnimate3, 2750);

    setTimeout(honeAnimate2, 2950);
    setTimeout(honeAnimate1, 3150);
  setTimeout(honeAnimate2, 3250);
    setTimeout(honeAnimate3, 3350);

      setTimeout(honeAnimate2, 3450);
    setTimeout(honeAnimate1, 3600);
  setTimeout(honeAnimate2, 3800);
    setTimeout(honeAnimate3, 3900);

        setTimeout(honeAnimate2, 4000);
    setTimeout(honeAnimate1, 4200);
  setTimeout(honeAnimate2, 4500);
    setTimeout(honeAnimate3, 4700);


setTimeout(RunFunctionTwoPREKill, 5000);


}


function honeAnimate1() {

   document.getElementById('hone1').style.display='none';
     document.getElementById('hone3').style.display='none';
   document.getElementById('hone4').style.display='none';


  document.getElementById('hone2').style.display='';


}
function honeAnimate2() {

  document.getElementById('hone3').style.display='';
document.getElementById('hone2').style.display='none';
   document.getElementById('hone1').style.display='none';
   document.getElementById('hone4').style.display='none';


}

function honeAnimate3() {

  document.getElementById('hone4').style.display='';
   document.getElementById('hone3').style.display='none';
   document.getElementById('hone2').style.display='none';
   document.getElementById('hone1').style.display='none';


}



function RunFunctionTwoPREKill() {

document.getElementById('bdy').style.display='';
  document.getElementById('hone1').style.display='none';
  document.getElementById('hone2').style.display='none';
  document.getElementById('hone3').style.display='none';
  document.getElementById('hone4').style.display='none';


}




//below function has two jobs, first job is to stop the program if one of the inputs are empty. It displays an error message warning when empty. The second job is to let user know that if they passed an input correctly with given instructions, everything is ok.

function RunFunctionTwo() {


if (document.getElementById('input1').value.length== 0) {
  document.getElementById('alertP1').innerHTML = 'Error: Your first input is empty or contains a non-numeric character. The program has stopped because of this. This means no analysis was made and niether the rest of your inputs have been read. If you are not getting this error for your first input, this means your inputs entered before this have been read and are compatible to work with. Please Refresh the page and make sure all your inputs are filled.'; return;
}
  else {
  document.getElementById('alertP1').innerHTML = '';

}

if (document.getElementById('input2').value.length== 0) {
  document.getElementById('alertP2').innerHTML = 'Error: Your second input is empty or contains a non-numeric character. The program has stopped because of this. This means no analysis was made and niether the rest of your inputs have been read. If you are not getting this error for your first input, this means your inputs entered before this have been read and are compatible to work with. Please Refresh the page and make sure all your inputs are filled.'; return;
}
  else {
  document.getElementById('alertP2').innerHTML = '';

}

if (document.getElementById('input3').value.length== 0) {
  document.getElementById('alertP3').innerHTML = 'Error: Your third input is empty or contains a non-numeric character. The program has stopped because of this. This means no analysis was made and niether the rest of your inputs have been read. If you are not getting this error for your first input, this means your inputs entered before this have been read and are compatible to work with. Please Refresh the page and make sure all your inputs are filled.'; return;
}
  else {
  document.getElementById('alertP3').innerHTML = '';

}

if (document.getElementById('input4').value.length== 0) {
  document.getElementById('alertP4').innerHTML = 'Error: Your fourth input is empty or contains a non-numeric character. The program has stopped because of this. This means no analysis was made and niether the rest of your inputs have been read. If you are not getting this error for your first input, this means your inputs entered before this have been read and are compatible to work with. Please Refresh the page and make sure all your inputs are filled.'; return;
}
  else {
  document.getElementById('alertP4').innerHTML = '';

}

if (document.getElementById('input5').value.length== 0) {
  document.getElementById('alertP5').innerHTML = 'Error: Your fifth input is empty or contains a non-numeric character. The program has stopped because of this. This means no analysis was made and niether the rest of your inputs have been read. If you are not getting this error for your first input, this means your inputs entered before this have been read and are compatible to work with. Please Refresh the page and make sure all your inputs are filled.'; return;
}
  else {
  document.getElementById('alertP5').innerHTML = '';

}






//below statements are responsible for printing the entered values on user screen. If user skipped an input by typing minus zero as they have been told in order to skip a box, the value for that spesific input will be shown as: SKIPPED *it is not working perfect at the moment needs bug fixes

const input1x = parseFloat(document.getElementById('input1').value);
const input2x = parseFloat(document.getElementById('input2').value);
const input3x = parseFloat(document.getElementById('input3').value);
const input4x = parseFloat(document.getElementById('input4').value);
const input5x = parseFloat(document.getElementById('input5').value);

document.getElementById('P1').innerHTML = ('Your inputs are: ' + input1x +   ', '   + input2x +   ', '   +input3x +   ', '   + input4x +   ', '   + input5x +   ' ');



 //////start of the analysis///////




// let the user know if some numbers are the same



  //for input 1

      if (input1x == input2x ) {

      document.getElementById('P2').innerHTML ='input 1 is the same as input 2 ';

     }

      if (input1x == input3x ) {

      document.getElementById('P3').innerHTML ='input 1 is the same as input 3 ';

     }

      if (input1x == input4x ) {

      document.getElementById('P4').innerHTML ='input 1 is the same as input 4 ';

     }

   if (input1x == input5x) {

      document.getElementById('P5').innerHTML ='input 1 is the same as input 5 ';

     }




  //for input 2

      if (input2x == input1x ) {

      document.getElementById('P6').innerHTML ='input 2 is the same as input 1 ';

     }

      if (input2x == input3x ) {

      document.getElementById('P7').innerHTML ='input 2 is the same as input 3 ';

     }

      if (input2x == input4x ) {

      document.getElementById('P8').innerHTML ='input 2 is the same as input 4 ';

     }

   if (input2x == input5x ) {

      document.getElementById('P9').innerHTML ='input 2 is the same as input 5 ';

     }


//for input 3

      if (input3x == input1x ) {

      document.getElementById('P10').innerHTML ='input 3 is the same as input 1 ';

     }

      if (input3x == input2x ) {

      document.getElementById('P11').innerHTML ='input 3 is the same as input 2 ';

     }

      if (input3x == input4x ) {

      document.getElementById('P12').innerHTML ='input 3 is the same as input 4 ';

     }

   if (input3x == input5x ) {

      document.getElementById('P13').innerHTML ='input 3 is the same as input 5 ';

     }

  //for input 4

      if (input4x == input1x ) {

      document.getElementById('P14').innerHTML ='input 4 is the same as input 1 ';

     }

      if (input4x == input2x ) {

      document.getElementById('P15').innerHTML ='input 4 is the same as input 2 ';

     }

      if (input4x == input3x ) {

      document.getElementById('P16').innerHTML ='input 4 is the same as input 3 ';

     }

   if (input4x == input5x ) {

      document.getElementById('P17').innerHTML ='input 4 is the same as input 5 ';

     }

//for input 5

      if (input5x == input2x ) {

      document.getElementById('P18').innerHTML ='input 5 is the same as input 2 ';

     }

      if (input5x == input3x ) {

      document.getElementById('P19').innerHTML ='input 5 is the same as input 3 ';

     }

      if (input5x == input4x ) {

      document.getElementById('P20').innerHTML ='input 5 is the same as input 4 ';

     }

   if (input5x == input1x ) {

      document.getElementById('P21').innerHTML ='input 5 is the same as input 1 ';

     }

//all numbers are the same
if (input1x==input2x  && input1x==input3x   &&  input1x==input4x  &&  input1x==input5x  && input2x==input3x   &&input2x==input4x  &&input2x==input5x && input3x==input4x  &&input3x==input5x  &&input4x==input5x) {

        document.getElementById('P22').innerHTML ='ALL NUMBERS/INPUTS ARE THE SAME ';

}
  else {
            document.getElementById('P22').innerHTML ='ALL NUMBERS/INPUTS ARE NOT THE SAME ';

  }


//which number is the largest? and which input is it?

if (input1x >= input2x && input1x >= input3x && input1x >= input4x && input1x >= input5x) {
  document.getElementById('P23').innerHTML =' largest number is your first input and it is: '+input1x;
}

  if (input2x >= input1x && input2x >= input3x && input2x >= input4x && input2x >= input5x) {

      document.getElementById('P23').innerHTML =' largest number is your second input and it is: '+input2x;

  }

    if (input3x >= input1x && input3x >= input2x && input3x >= input4x && input3x >= input5x) {
      document.getElementById('P23').innerHTML =' largest number is your third input and it is: '+input3x;


  }

    if (input4x >= input1x && input4x >= input2x && input4x >= input3x && input4x >= input5x) {

      document.getElementById('P23').innerHTML =' largest number is your fourth input and it is: '+input4x;

  }

   if (input5x >= input1x && input5x >= input2x && input5x >= input3x && input5x >= input4x)  {
      document.getElementById('P23').innerHTML =' largest number is your fifth input and it is: '+input5x;

  }


//which number is the smallest? and which input is it?

  if (input1x <= input2x && input1x <= input3x && input1x <= input4x && input1x <= input5x) {
  document.getElementById('P24').innerHTML =' smallest number is your first input and it is: '+input1x;
}

  if (input2x <= input1x && input2x <= input3x && input2x <= input4x && input2x <= input5x) {

      document.getElementById('P24').innerHTML =' smallest number is your second input and it is: '+input2x;

  }

    if (input3x <= input1x && input3x <= input2x && input3x <= input4x && input3x <= input5x) {
      document.getElementById('P24').innerHTML =' smallest number is your third input and it is: '+input3x;


  }

    if (input4x <= input1x && input4x <= input2x && input4x <= input3x && input4x <= input5x) {

      document.getElementById('P24').innerHTML =' smallest number is your fourth input and it is: '+input4x;

  }

   if (input5x <= input1x && input5x <= input2x && input5x <= input3x && input5x <= input4x)  {
      document.getElementById('P24').innerHTML =' smallest number is your fifth input and it is: '+input5x;

  }

//what if we add all inputs
  if (total=input1x+input2x+input3x+input4x+input5x) {

    document.getElementById('P25').innerHTML='when we add all these numbers we get: '+total;
  }
//what if we multiply all inputs with each other
 if (total2=input1x*input2x) {

    document.getElementById('P26').innerHTML='when we multiply input 1 and 2 we get: '+total2;
  }
   if (total3=input1x*input3x) {

    document.getElementById('P27').innerHTML='when we multiply input 1 and 3 we get: '+total3;
  }
   if (total4=input1x*input4x) {

    document.getElementById('P28').innerHTML='when we multiply input 1 and 4 we get: '+total4;
  }
   if (total5=input1x*input5x) {

    document.getElementById('P29').innerHTML='when we multiply input 1 and 5 we get: '+total5;
  }
   if (total6=input1x*input1x) {

    document.getElementById('P30').innerHTML='when we multiply input 1 with itself we get: '+total6;
  }
   if (total7=input2x*input2x) {

    document.getElementById('P31').innerHTML='when we multiply input 2 with itself we get: '+total7;
  }
   if (total8=input3x*input3x) {

    document.getElementById('P32').innerHTML='when we multiply input 3 with itself we get: '+total8;
  }
   if (total9=input4x*input4x) {

    document.getElementById('P33').innerHTML='when we multiply input 4 with itself we get: '+total9;
  }
   if (total10=input5x*input5x) {

    document.getElementById('P34').innerHTML='when we multiply input 5 with itself we get: '+total10;
  }
   if (total11=input2x*input3x) {

    document.getElementById('P35').innerHTML='when we multiply input 2 and 3 we get: '+total11;
  }
   if (total12=input2x*input4x) {

    document.getElementById('P36').innerHTML='when we multiply input 2 and 4 we get: '+total12;
  }
   if (total13=input2x*input5x) {

    document.getElementById('P37').innerHTML='when we multiply input 2 and 5 we get: '+total13;
  }
   if (total14=input3x*input4x) {

    document.getElementById('P38').innerHTML='when we multiply input 3 and 4 we get: '+total14;
  }
   if (total15=input3x*input5x) {

    document.getElementById('P39').innerHTML='when we multiply input 3 and 5 we get: '+total15;
  }
   if (total16=input4x*input5x) {

    document.getElementById('P40').innerHTML='when we multiply input 4 and 5 we get: '+total16;
  }
//what if we divide all inputs to each other in order
  if (divide=input1x/input2x/input3x/input4x/input5x) {

    document.getElementById('P41').innerHTML='when divide all inputs with each other in order we get: '+divide;
  }
//what if we subtract all inputs in order from each other
if (divide=input1x-input2x-input3x-input4x-input5x) {

    document.getElementById('P42').innerHTML='when subtract all inputs from each other in order we get: '+divide;
  }

//what if we multiply all inputs with pi (3.14)
  if (input1timesPi=input1x*3.14) {
    document.getElementById('P43').innerHTML='input 1 times Pi (3.14) is equal to: '+input1timesPi;
  }

  if (input2timesPi=input2x*3.14) {
        document.getElementById('P44').innerHTML='input 2 times Pi (3.14) is equal to: '+input2timesPi;

  }

  if (input3timesPi=input3x*3.14) {
        document.getElementById('P45').innerHTML='input 3 times Pi (3.14) is equal to: '+input3timesPi;

  }

  if (input4timesPi=input4x*3.14) {
        document.getElementById('P46').innerHTML='input 4 times Pi (3.14) is equal to: '+input4timesPi;

  }

  if (input5timesPi=input5x*3.14) {
        document.getElementById('P47').innerHTML='input 5 times Pi (3.14) is equal to: '+input5timesPi;

  }


//if input 1 was km it would be this in meters
  if(i1kmtometers=input1x*1000) {
            document.getElementById('P48').innerHTML=' if input 1 was km it would be this in meters: '+i1kmtometers;

  }
//if input 1 was in meters it would be this in km
    if(i1mtokm=input1x/1000) {
                document.getElementById('P49').innerHTML='if input 1 was in meters it would be this in km: '+i1mtokm;

  }
//if input 1 was in km it would be this in miles
    if(i1kmtomil=input1x/1.609) {
                document.getElementById('P50').innerHTML=' if input 1 was in km it would be this in miles: '+i1kmtomil;

  }
//if input 1 was in miles it would be this in km
    if(i1mtokm=input1x*1.609) {
                document.getElementById('P51').innerHTML=' if input 1 was in miles it would be this in km: '+i1mtokm;

  }
//one percent of  input 1 is this
    if(oneperofi1=input1x/100) {
                document.getElementById('P52').innerHTML=' one percent of  input 1 is this: '+oneperofi1+'%';

  }
//two percent of  input  1 is this
    if(twoperofi1=input1x/100*2) {
                document.getElementById('P53').innerHTML=' two percent of  input  1 is this: '+twoperofi1+'%';

  }
//three percent of  input 1 is this
    if(threeperofi1=input1x/100*3) {
                document.getElementById('P54').innerHTML=' three percent of  input 1 is this: '+threeperofi1+'%';

  }
//four percent of  input 1  is this
    if(fourperofi1=input1x/100*4) {
                document.getElementById('P55').innerHTML=' four percent of  input 1  is this: '+fourperofi1+'%';

  }
//five percent of  input 1 is this
    if(fiveperofi1=input1x/100*5) {
                document.getElementById('P56').innerHTML=' five percent of  input 1 is this: '+fiveperofi1+'%';

  }
//ten percent of  input 1 is this
    if(tenperofi1=input1x/100*10) {
                document.getElementById('P57').innerHTML=' ten percent of  input 1 is this: '+tenperofi1+'%';

  }
//if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2015's top monthly price
    if(i1usdtobitcoinin2010to15=input1x/0.0008*362.73) {
                document.getElementById('P58').innerHTML=' if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2015s top monthly price: '+i1usdtobitcoinin2010to15;

  }
//if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2018's top monthly price
    if(i1usdtobitcoinin2010to18=input1x/0.0008*13412.44) {
                document.getElementById('P59').innerHTML=' if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2018s top monthly price: '+i1usdtobitcoinin2010to18;

  }
//if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2020's top monthly price
    if(i1usdtobitcoinin2010to20=input1x/0.0008*18795.20) {
     document.getElementById('P60').innerHTML='if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2020s top monthly price : '+i1usdtobitcoinin2010to20;
  }

//if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2021's 10th month price
  if(i1usdtobitcoinin2010to21=input1x/0.0008*48162.71) {
                document.getElementById('P61').innerHTML='if  input 1 is how much dollars you put in bitcoin in lowest of 2010, you would have this much dollars in 2021s top monthly price : '+i1usdtobitcoinin2010to21;

  }

//if input1 is your dollar savings in 1900, you now have... this much dollars
  if(dollar=input1x*32.93){
    document.getElementById('P62').innerHTML='if your first input is your dollar savings from 1900s, now you have '+dollar+' dollars in 2021';
  }
//square root of inputs
  if(squareroot=Math.sqrt(input1x)) {
    document.getElementById('P63').innerHTML='Square root of your first input is: '+squareroot;
  }
  if(squareroot=Math.sqrt(input2x)) {
    document.getElementById('P64').innerHTML='Square root of your second input is: '+squareroot;
  }
  if(squareroot=Math.sqrt(input3x)) {
    document.getElementById('P65').innerHTML='Square root of your third input is: '+squareroot;
  }
  if(squareroot=Math.sqrt(input4x)) {
    document.getElementById('P66').innerHTML='Square root of your fourth input is: '+squareroot;
  }
  if(squareroot=Math.sqrt(input5x)) {
    document.getElementById('P67').innerHTML='Square root of your fifth input is: '+squareroot;
  }


 var solution68=input1x*101;

 document.getElementById('P68').innerHTML='your first input times 101 is: '+solution68;


   var solution69=input1x*111;

 document.getElementById('P69').innerHTML='your first input times 111 is: '+solution69;




  if(0==0) {

   var reversedNumber=input1x.toString().split('').reverse().join('');

  }


document.getElementById('P70').innerHTML='your first input in reverse is: '+  reversedNumber;


var PythagoreanC = Math.sqrt((input1x*input1x)+(input2x*input2x));

document.getElementById('P71').innerHTML='If your first input is side A of a right triangle and your 2nd input is the side B of the right triangle, according to Pythagorean Theorem, hypotenuse of this right triangle would be: '+PythagoreanC;


  if(0==0) {

    var reversedNumber2=input2x.toString().split('').reverse().join('');


  }

  document.getElementById('P72').innerHTML='your second input in reverse is: '+reversedNumber2;


    if(0==0) {

    var reversedNumber3=input3x.toString().split('').reverse().join('');


  }

  document.getElementById('P73').innerHTML='your third input in reverse is: '+reversedNumber3;

   if(0==0) {

    var reversedNumber4=input4x.toString().split('').reverse().join('');


  }

  document.getElementById('P74').innerHTML='your fourth input in reverse is: '+reversedNumber4;


   if(0==0) {

    var reversedNumber5=input5x.toString().split('').reverse().join('');


  }

  document.getElementById('P75').innerHTML='your fifth input in reverse is: '+reversedNumber5;



  var PythagoreanC = Math.sqrt((input1x*input1x)+(input3x*input3x));

document.getElementById('P76').innerHTML='If your second input is side A of a right triangle and your 3rd input is the side B of the right triangle, according to Pythagorean Theorem, hypotenuse of this right triangle would be: '+PythagoreanC;

  var PythagoreanC = Math.sqrt((input3x*input3x)+(input2x*input2x));

document.getElementById('P77').innerHTML='If your third input is side A of a right triangle and your 2nd input is the side B of the right triangle, according to Pythagorean Theorem, hypotenuse of this right triangle would be: '+PythagoreanC;

  var PythagoreanC = Math.sqrt((input4x*input4x)+(input2x*input2x));

document.getElementById('P78').innerHTML='If your fourth input is side A of a right triangle and your 2nd input is the side B of the right triangle, according to Pythagorean Theorem, hypotenuse of this right triangle would be: '+PythagoreanC;

  var PythagoreanC = Math.sqrt((input5x*input5x)+(input2x*input2x));

document.getElementById('P79').innerHTML='If your fifth input is side A of a right triangle and your 2nd input is the side B of the right triangle, according to Pythagorean Theorem, hypotenuse of this right triangle would be: '+PythagoreanC;


//---start-factorial---1-----

function factorial(inputForFactorial) {
  let answerForFactorial = 1;
  if(inputForFactorial== 0 || inputForFactorial==1) {
return answerForFactorial;
  }

  else{

    for(var i = inputForFactorial; i>1; i--) {
      answerForFactorial = answerForFactorial * i;
    }
    return answerForFactorial;

  }
}
  let inputForFactorial=input1x;
answerForFactorial=factorial(inputForFactorial);

  document.getElementById('P80').innerHTML= 'The factorial of input 1 ('+input1x+') is: '+ answerForFactorial;

//---end-factorial----1----



//---start-factorial---2-----

function factorial2(inputForFactorial2) {
  let answerForFactorial2 = 1;
  if(inputForFactorial2== 0 || inputForFactorial2==1) {
return answerForFactorial2;
  }

  else{

    for(var i = inputForFactorial2; i>1; i--) {
      answerForFactorial2 = answerForFactorial2 * i;
    }
    return answerForFactorial2;

  }
}
  let inputForFactorial2=input2x;
answerForFactorial2=factorial2(inputForFactorial2);

  document.getElementById('P81').innerHTML= 'The factorial of input 2 ('+input2x+') is: '+ answerForFactorial2;

//---end-factorial----2----


  //---start-factorial---3-----

function factorial3(inputForFactorial3) {
  let answerForFactorial3 = 1;
  if(inputForFactorial3== 0 || inputForFactorial3==1) {
return answerForFactorial3;
  }

  else{

    for(var i = inputForFactorial3; i>1; i--) {
      answerForFactorial3 = answerForFactorial3 * i;
    }
    return answerForFactorial3;

  }
}
  let inputForFactorial3=input3x;
answerForFactorial3=factorial3(inputForFactorial3);

  document.getElementById('P82').innerHTML= 'The factorial of input 3 ('+input3x+') is: '+ answerForFactorial3;

//---end-factorial----3----

  //---start-factorial---4-----

function factorial4(inputForFactorial4) {
  let answerForFactorial4 = 1;
  if(inputForFactorial4== 0 || inputForFactorial4==1) {
return answerForFactorial4;
  }

  else{

    for(var i = inputForFactorial4; i>1; i--) {
      answerForFactorial4 = answerForFactorial4 * i;
    }
    return answerForFactorial4;

  }
}
  let inputForFactorial4=input4x;
answerForFactorial4=factorial4(inputForFactorial4);

  document.getElementById('P83').innerHTML= 'The factorial of input 4 ('+input4x+') is: '+ answerForFactorial4;

//---end-factorial----4----
  //---start-factorial---5-----

function factorial5(inputForFactorial5) {
  let answerForFactorial5 = 1;
  if(inputForFactorial5== 0 || inputForFactorial5==1) {
return answerForFactorial5;
  }

  else{

    for(var i = inputForFactorial5; i>1; i--) {
      answerForFactorial5 = answerForFactorial5 * i;
    }
    return answerForFactorial5;

  }
}
  let inputForFactorial5=input5x;
answerForFactorial5=factorial5(inputForFactorial5);

  document.getElementById('P84').innerHTML= 'The factorial of input 5 ('+input5x+') is: '+ answerForFactorial5;

//---end-factorial----5----

//end of functions

}


//----------------------------------------------------------------------------------------------------------------------welcomepage-----

var i = 0;

var txt = "why don\'t you click the above button? c\'mon start the program I can not wait forever! :\) ";

var speed=40;

var stays=10000;



function daktiloIn() {

          if(i<txt.length) {

           document.getElementById('welcomefunP').innerHTML += txt.charAt(i); i++; setTimeout(daktiloIn, speed);

         }
      }



function daktilo() {
function displaysNot() {


document.getElementById("welcomefunD").style.display = "none";

}
setTimeout(displaysNot, stays);


  }




//end of functions


//----------------------------------------------------------------------------------------------------------------------CSS-BLUR----

function blureffect1() {

document.getElementById('htmlTag').style.filter='';



}

function blureffect2() {

document.getElementById('htmlTag').style.filter='blur(0.3px)';



}

function blureffect3() {

document.getElementById('htmlTag').style.filter='blur(0.6px)';



}
function blureffect4() {

document.getElementById('htmlTag').style.filter='blur(0.9px)';



}

function blureffect5() {

document.getElementById('htmlTag').style.filter='blur(1.2px)';



}

function blureffect6() {

document.getElementById('htmlTag').style.filter='blur(1.5px)';



}

function effect1() {
setTimeout(blureffect1, 100);
setTimeout(blureffect2, 250);
setTimeout(blureffect3, 300);
setTimeout(blureffect4, 450);
setTimeout(blureffect5, 500);
setTimeout(blureffect6, 650);
setTimeout(blureffect5, 700);
setTimeout(blureffect4, 850);
setTimeout(blureffect3, 900);
setTimeout(blureffect2, 1050);
setTimeout(blureffect1, 1150);
setTimeout(blureffect2, 1250);
setTimeout(blureffect3, 1350);
setTimeout(blureffect4, 1450);
setTimeout(blureffect5, 1550);
setTimeout(blureffect6, 1650);
setTimeout(blureffect5, 1750);
setTimeout(blureffect4, 1850);
setTimeout(blureffect3, 1950);
setTimeout(blureffect2, 2000);
setTimeout(blureffect1, 2100);


  setTimeout(effect1, 12750);


}








