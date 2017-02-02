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
  document.getElementById("testResult").innerHTML=result + " Watts = " + kw + " KW";
  dangerous=(result>4680)?"High":"Low";
  document.getElementById("cautionTag").innerHTML=dangerous;
  amps1s = (result / 120).toFixed(2);
  document.getElementById("amperage1s").innerHTML=amps1s + " AMPS @ 120V";
  amps2s = (result / 240).toFixed(2);
  document.getElementById("amperage").innerHTML=amps2s + " AMPS @ 240V";
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
