
function f1(){
var myJSON='{"email":"","name":"","animal":"tiger","bird":"peackock"}';
var myobj=JSON.parse(myJSON);
myobj.email=document.assi.email.value;
myobj.name=document.assi.name.value;
document.getElementById("demo").innerHTML=myobj.name;
if(myobj.animal==document.assi.animal.value)
	{
	document.getElementById("demo").innerHTML="Correct Answer";
	}
else
	{
	document.getElementById("demo").innerHTML="Wrong Answer";
	}
if(myobj.bird==document.assi.bird.value)
	{
		document.getElementById("demo1").innerHTML="Correct Answer";
	}
else
	{
		document.getElementById("demo1").innerHTML="Wrong Answer";
	}

}