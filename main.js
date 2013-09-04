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
        return parseFloat( (yearlyInterest) * 12 ).toFixed( 2 );
    };
    this.getMonthlyInterest = function () {
        var monthlyInterest = ( this.rate * this.amount ) / 1;
        return parseFloat( monthlyInterest / 12 ).toFixed( 2 );
    };
    this.getDoubleInterest = function () {
        var doubleInterest = this.getTotalInterest();
        return doubleInterest * 2;
    };
};

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
    this.oilChangeMiles = function ( milesWhenServiced ) {
        this.lastOilChange = milesWhenServiced;
        return this.lastOilChange + " was the milage when last serviced.";
    };
    this.milesSinceServiced = function () {
        return this.miles - this.lastOilChange + " miles have been driven since last service.";                        
    };
};

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
