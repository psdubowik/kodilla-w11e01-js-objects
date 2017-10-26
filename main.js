function Phone(brand, price, color, memory, cores, screenSize, nfc = false) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory; 
    this.cores = cores;
    this.screenSize = screenSize;
    this.nfc = nfc;
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "PLN. It has " + this.memory + "GB of memory and the near field communication is " + printBoolean(this.nfc) + ".")
};

function printBoolean(testBool) {
    if(testBool) {
        return "enabled";

    } else {
        return "disabled";
    }
};

function checkBetterPhone(phoneOne, phoneTwo) {
    var params = ["memory", "cores", "screenSize"];
    console.log("Comparison result:")
    for (p = 0; p < 3; p++) {
        var testedParam = params[p];
        compareOneAttribute(phoneOne, phoneTwo, testedParam);   
    }
};

function compareOneAttribute(phoneOne, phoneTwo, attrName) {
    if(phoneOne[attrName] > phoneTwo[attrName]){
        console.log(phoneOne.brand + " has better " + attrName + " - " + phoneOne[attrName] + ".")
    } else if (phoneOne[attrName] < phoneTwo[attrName]){
        console.log(phoneTwo.brand + " has better " + attrName + " - " + phoneTwo[attrName] + ".")
    } else
        console.log("Specs are the same.")
};

var iPhone7 = new Phone("Apple", 4700, "silver", 64, 8, 7);
var SamsungGalaxyS7 = new Phone("Samsung", 1900, "golden", 32, 4, 10, true);
var OnePlusOne = new Phone("OnePlus", 1300, "black", 16, 16, 8, true);

iPhone8.printInfo();
SamsungGalaxyS7.printInfo();
OnePlusOne.printInfo();

checkBetterPhone(iPhone7, OnePlusOne);
