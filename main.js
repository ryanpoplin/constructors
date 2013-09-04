// constructor 1...

var InvestmentTerms = function ( initRate, initYears, initAmount ) {
	this.rate = initRate;
	this.years = initYears;
    this.amount = initAmount;
    this.getMonths = function () {
        return this.years * 12;
    };
    this.getTotalInterest = function () {
        return this.rate * this.years * this.amount;
    };
    this.getYearlyInterest = function () {
        var yearlyInterest = ( this.rate * this.amount ) / 12;
        return parseFloat( yearlyInterest * 12 ).toFixed( 2 );
    };
    this.getMonthlyInterest = function () {
        var monthlyInterest = ( this.rate * this.amount ) / 1;
        return parseFloat( monthlyInterest / 12 ).toFixed( 2 );
    };
    this.getDoubleInterest = function () {
        var doubleInterest = terms.getTotalInterest();
        return doubleInterest * 2;
    };
};

var terms = new InvestmentTerms( 0.08, 10, 100000 );

var months = terms.getMonths();
console.log( months );

var interest = terms.getTotalInterest();
console.log( interest );

yearlyInterest = terms.getYearlyInterest();
console.log( yearlyInterest );

monthlyInterest = terms.getMonthlyInterest();
console.log( monthlyInterest );

doubleInterest = terms.getDoubleInterest();
console.log( doubleInterest );

// constructor 2...

var Vehicle = function ( make, model ) {
    this.make = make;
    this.model = model;
    this.miles = 0;
    this.lastOilChange = 0;
    this.company = function () {
        return this.make + " is the brand name of this vehicle.";
    };
    this.vehicleModel = function () {
        return this.model + " is the model of this vehicle.";
    };
    this.drive = function ( miles ) {
        this.miles += miles;
        return this.miles + " miles are on this vehicle.";
    };
    this.changeOil = function ( milesWhenServiced ) {
        this.lastOilChange = milesWhenServiced;
        return this.lastOilChange + " was the milage when last serviced.";
    };
    this.needOilChange = function () {
        return this.miles - this.lastOilChange + " miles have been driven since last service.";                        
    };
};

var whip = new Vehicle( "Ford", "F-150" );

var whipBrand = whip.company();
console.log( whipBrand );

var whipModel = whip.vehicleModel();
console.log( whipModel );

var miles = whip.drive( 67700 );
console.log( miles );

var oilChange = whip.changeOil( 65000 );
console.log( oilChange );

var newOil = whip.needOilChange();
console.log( newOil );

// constructor 3...

var Netflix = function ( title, year, genre ) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.starOne = function () {
        return "If " + this.title + " " + this.year + " " + this.genre + " is rated with one star, it sucks!";
    };
    this.starOne = function () {
        return "If " + this.title + " " + this.year + " " + this.genre + " is rated with two stars, you shouldn't watch it.";
    };
    this.starThree = function () {
        return "If " + this.title + " " + this.year + " " + this.genre + " is rated with three stars, it means that it's ok...";
    };
    this.starFour = function () {
        return "If " + this.title + " " + this.year + " " + this.genre + " is rated with four stars, it's a good; watch it!";
    };
    this.starFive = function () {
        return "If " + this.title + " " + this.year + " " + this.genre + " is rated with five stars, you better watch it!";
    };
};

var clips = new Netflix( "Half Baked", 1998, "Comedy" );

var rating = clips.starFive();
console.log( rating );

