var kwhT;
var kw;
var c = 0;
function myCounter() {
  RstLbls();
  document.getElementById("TimeCntr").innerHTML = ++c;
  document.getElementById("widgets").value = "";
  post.style.display = 'none';
  StpBttnPst.style.display = 'block';
}
  function RstTmeCntr() {
  clearInterval(PlseTimer);   
  document.getElementById("seconds").value = document.getElementById("TimeCntr").innerHTML;
  document.getElementById("TimeCntr").innerHTML = "0";
  c = 0;
  post.style.display = 'block';
  StpBttnPst.style.display = 'none';
}
function RstLbls() {
  document.getElementById("widgets").value = "";
  document.getElementById("testResult").innerHTML = "";
  //document.getElementById("cautionTag").innerHTML = "";
  document.getElementById("amperage1s").innerHTML= "";
  document.getElementById("amperage").innerHTML= "";
  document.getElementById("seconds").value = "0";
  rstTbleFlds();
}
  function wattsFunction(){
  var x = document.getElementById("widgets").value;
  var y = document.getElementById("seconds").value;
  var result = "";
  var results = "";
  var time_widgets = 3600 * x;
  var results = time_widgets / y;
  var result = round(results, 2);
  //result = Math.round((time_widgets / y) * 100) / 100  //returns 00.00
  //result = parsefloat((time_widgets / y).toFixed(2));  //Breaks Code
  wattCnv = result / 1000;
  kw = wattCnv.toFixed(2);
  document.getElementById("testResult").innerHTML=result + " Watts = " + kw + " KW";
  //dangerous=(result>4680)?"High":"Low";
  //document.getElementById("cautionTag").innerHTML=dangerous;
  amps1s = (result / 120).toFixed(2);
  document.getElementById("amperage1s").innerHTML=amps1s + " AMPS @ 120V";
  amps2s = (result / 240).toFixed(2);
  document.getElementById("amperage").innerHTML=amps2s + " AMPS @ 240V";
  
  //kwh=kw;
  calculate();
  //document.getElementById("kw?").innerHTML=amps2s + " AMPS @ 240V";
      
}
  function timeLoad(){
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
  secCntDwn=secCntDwn - 1;
  document.getElementById("CountDown").innerHTML=secCntDwn + " Seconds Left";
  clearInterval(myVar);
}
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//added calculations for table
function calculate() {
//watts = document.calculator.watts.value;
//kwhT = document.getElementById("testResult").innerHTML;
//kwhT = 10;
kwhT = kw;
hours = document.calculator.hours.value;
days = document.calculator.days.value;
rate = 0.13;

kwhTot = kwhT * hours * days * rate;
    kwpermonth = kwhT * hours * days;
	costpermonth = kwhTot;
	costperyear = costpermonth*12;
	document.calculator.kwh.value=kwpermonth.toFixed();
	document.calculator.costpermonth.value = round(costpermonth, 2);
	document.calculator.costperyear.value = round(costperyear, 2);
}
function rstTbleFlds(){
    document.calculator.kwh.value="";
	document.calculator.costpermonth.value = "";
	document.calculator.costperyear.value = "";
}
