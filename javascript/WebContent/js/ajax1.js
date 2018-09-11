function idVerification(){

	var xmlHttp;
	try{
	xmlHttp=new XMLHttpRequest();
	}
	catch(e)
	{
		alert("your browser is not supported");
	}
	console.log(xmlHttp.readyState);
	
xmlHttp.onreadystatechange = function(){
	if (xmlHttp.readyState == 4)
		{
		document.getElementById("te").innerHTML=this.responseText;
		}
	
}

xmlHttp.open("GET","register?userid="+document.RegForm.userid.value);
xmlHttp.send(null);
console.log(aa);

}


function loadDoc() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "register?userid", document.reg.userid.value);
	  xhttp.send();
	}
