let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,'a',true];



function doSomething2(){
    for(var i=0;i<3;i++)
        {
            console.log(e[i]);
        }
}

doSomething2();

enum Color{Red,Green,Blue}
let BackgroundColor=Color.Red;
console.log(BackgroundColor);
