function test1(){
  var li = document.createElement("Li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



}

function test2()
{
	var mydata= JSON.parse(data);
	console.log(mydata[0].name);
	console.log(mydata[0].age);


}

function alert()
{
  alert(2+1);
  alert("2"+1);


}
 
var countDownDate = new Date("Sep 8, 2018 15:37:25").getTime();

//Update the count down every 1 second
var x = setInterval(function() {

 // Get todays date and time
 var now = new Date().getTime();
 
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
 
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Output the result in an element with id="demo"
 document.getElementById("time").innerHTML = days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";
 
 // If the count down is over, write some text 
 if (distance < 0) {
     clearInterval(x);
     document.getElementById("time").innerHTML = "EXPIRED";
 }
}, 1000);
    

function onli(){
	
	var link=document.getElementById("click2"); 
	link.onclick=function(){
		alert("hello");
	}

}

