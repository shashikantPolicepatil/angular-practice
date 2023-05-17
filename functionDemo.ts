//names and anonymous functions. 
function add(x: number, y: number): number {
    return x + y;
}

let result = add(10 , 20);
console.log(result);

let result2 = function add2(x: number, y: number): number {
    return x + y;    
}

console.log(result2(10, 50));

let sum = result2(50, 89);
console.log(sum);

//optional params 
function wish(name: string, msg: string="Hi "): string {
    return name + " " + msg;
}

console.log(wish("shashi"));
console.log(wish("shashi","hello"));


//var arg..
function greet(msg: string, ...names: string[]) {
    console.log(msg + "--" + names.join(","));
}

greet("GA", "hi", "yes", "no");

greet("GA", "hi", "yes", "no","kjh","dfjkh");