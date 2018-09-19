var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'a', true];
function doSomething2() {
    for (var i = 0; i < 3; i++) {
        console.log(e[i]);
    }
}
doSomething2();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var BackgroundColor = Color.Red;
console.log(BackgroundColor);
