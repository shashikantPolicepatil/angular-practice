var petName = "dog";

function setPetName() {
    var petName = "cat";
    console.log("printing petname inside function:" + petName);
}

setPetName();
console.log("printing petname outside function:" + petName);

var index = 0;
for (var index = 0; index <= 5; index++) {
    console.log("index val inside loop:" + index);
}
console.log("index val outside look:" + index);