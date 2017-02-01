//code
//counter variable for the timer    
var c = 0;
//variable for removing and adding the start button for the page
var post = document.getElementById('StrtBttn');
//variable for removing and adding the stop button for the page
var StpBttnPst = document.getElementById('StpBttn');
//load the page with no stop button
StpBttnPst.style.display = 'none';
function myCounter() {
  //reset the text input of the widgets input textbox
  RstLbls();
  //every 1000ms the count will go up 1
  document.getElementById("TimeCntr").innerHTML = ++c;
  //reset the text input of the widgets input textbox
  document.getElementById("widgets").value = "";
  //Hide the Start Button but preserve it's location
  //document.getElementById("StrtBttn").style.visibility = "hidden";
  //remove button from the page and alter it's location
  post.style.display = 'none';
  StpBttnPst.style.display = 'block';
}
function RstTmeCntr() {
  //reset the text input of the widgets input textbox
  //RstLbls();
  //Stops PlseTimer
  clearInterval(PlseTimer);
   //Change the text of id=Seconds for formulas    
  document.getElementById("seconds").value = document.getElementById("TimeCntr").innerHTML;
  //Change id=TimeCntr text as a reset of the text counter
  document.getElementById("TimeCntr").innerHTML = "0";
  //reset the actual counter, the c variable was created above this scope and is already in use
  c = 0;
  //Restore the Start Button
  //document.getElementById("StrtBttn").style.visibility = "visible";
  post.style.display = 'block';
  StpBttnPst.style.display = 'none';
}
function RstLbls() {
  document.getElementById("widgets").value = "";
  document.getElementById("testResult").innerHTML = "";
  document.getElementById("cautionTag").innerHTML = "";
  document.getElementById("amperage1s").innerHTML= "";
  document.getElementById("amperage").innerHTML= "";
  document.getElementById("seconds").value = "0";
}
function wattsFunction(){
  var x = document.getElementById("widgets").value;
  var y = document.getElementById("seconds").value;
  var result = "";
  var time_widgets = 3600 * x;
  result = time_widgets / y;
  wattCnv = result / 1000;
  kw = wattCnv.toFixed(2);
  //document.getElementById("testResult").innerHTML=result + " Watts";
  document.getElementById("testResult").innerHTML=result + " Watts = " + kw + " KW";
  dangerous=(result>4680)?"High":"Low";
  document.getElementById("cautionTag").innerHTML=dangerous;
  //wattCnv = result / 1000;
  //kw = wattCnv.toFixed(2);
  //1S Use 120v divider
  amps1s = result / 120;
  //amps1s = parseInt(result / 120); //removes decimal place
  amps1s.toFixed(2); //converts to string with two decimal places
  document.getElementById("amperage1s").innerHTML=amps1s + " AMPS @ 120V";
  //2S Use 240v divider
  amps2s = result / 240;
  //amps2s = parseInt(result / 240);
  amps2s.toFixed(2);
  document.getElementById("amperage").innerHTML=amps2s + " AMPS @ 240V";
}
function timeLoad(){
  //var audio = new Audio('beep.mp3');
  //audio.play();
  var secDelay = document.getElementById("seconds").value * 1000;
  setTimeout(function(){playBeep()},secDelay);
  var secCntDwn = document.getElementById("seconds").value;
  var myVar=setInterval(function(){myTimer()},1000);
}
function myTimer(){
  secCntDwn=secCntDwn - 1;
  document.getElementById("CountDown").innerHTML=secCntDwn + " Seconds Left";
}
function playBeep(){
  //var audio = new Audio('beep.mp3');
  //audio.play();
  secCntDwn=secCntDwn - 1;
  document.getElementById("CountDown").innerHTML=secCntDwn + " Seconds Left";
  clearInterval(myVar);
}
