//names and anonymous functions. 
function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log(result);
var result2 = function add2(x, y) {
    return x + y;
};
console.log(result2(10, 50));
var sum = result2(50, 89);
console.log(sum);
//optional params 
function wish(name, msg) {
    if (msg === void 0) { msg = "Hi"; }
    return name + " " + msg;
}
console.log(wish("shashi"));
console.log(wish("shashi", "hello"));
//var arg..
function greet(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + "--" + names.join(","));
}
greet("GA", "hi", "yes", "no");
greet("GA", "hi", "yes", "no", "kjh", "dfjkh");
