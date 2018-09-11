
function test(){
	var para=document.createElement("p");
	var node=document.createTextNode("this is new");
	para.appendChild(node);
	var element=document.getElementById("msg");
	element.appendChild(para);	
}

function test2()
{
   var i=0;
   var movies=new Movie(2);
   movies[0]=new Movie("ram",2,new Array("ram","laxman"));
   movies[1]=new Movie("sita",3,new Array("sita","mata"));
   for(i=0;i<2;i++)
	 {
	   console.log("the movie duration is"+movies[i].duration+"  "+"the movie actors are"+movies[i].actors+"  "+"the movie title is" + movies[i].title);
	 }

}

function test3()
{
	console.log(curday('/'));
	console.log(curday('-'));
	
   




}
function test1()
{
   
//   model=document.enter.model.value;
//   color=document.enter.color.value;
//   price=document.enter.price.value;
//  Car(model,color,price);
//  
	var i=0;
	var booke= new Book(4);
	booke[0]=new Book("ram","laxman1",true);
	booke[1]=new Book("ram1","laxman2",true);
	booke[2]=new Book("ram2","laxman3",true);
	booke[3]=new Book("ram3","laxman4",false);
	var element=document.getElementById("msg")
	for(i=0;i<4;i++)
	{
		if(booke[i].alreadyRead==true)
	{
		console.log("you have read the book"+"  "+booke[i].title);
	}
		else 
	{
		console.log("you have  not read the book"+"  "+ booke[i].title);
	}
		
	}
	

}


function Book(title,author,alreadyRead){
	this.title=title;
	this.author=author;
	this.alreadyRead=alreadyRead;
	
}


function Movie(title,duration,actors)
{
	this.title=title;
	this.duration=duration;
	this.actors=actors;


}

function cashRegister(banana,handkerchief,Tshirt,apple,nalgene,proteinShake)
{
     this.banana=banana;
     this.handkerchief=handkerchief;
     this.Tshirt=Tshirt;
     this.apple=apple;
     this.nalgene=nalgene;
     this.proteinShake=proteinShake;

}


var curday=function(sp){
	today=new Date();
	var dd="0"+(today.getDate());
	if(dd<10){dd="0"+(today.getDate())}
	var mm="0"+(today.getMonth()+1);
	if(mm<10){mm="0"+(today.getMonth()+1)}
	var yyyy=today.getFullYear();
	
	return (mm+sp+dd+sp+yyyy);
}

function sub(){
	var tej="tejas hegde";
	var n=tej.substr(2,5);
	var n1=tej.substr(2)
	var n2=n1.toUpperCase();
	alert(n2);
	document.getElementById("msg").innerHTML="NIMOUN";
	
}
