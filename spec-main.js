describe("InvestmentTerms Constructor ", function () {
	
	var terms = new InvestmentTerms( 0.08, 10, 100000 );

	it("total months for the loan calculations are valid", function () {
		expect(terms.getMonths()).toBe(120);
	});
	
	it("total interest loan amount calculations are valid", function () {
		expect(terms.getTotalInterest()).toBe(80000);
	});

	it("total yearly interest amount calculations are valid", function () {
		expect(terms.getYearlyInterest()).toBe(parseFloat(8000).toFixed( 2 ));
	});

	it("total monthly interest amount calculations are valid", function () {
		expect(terms.getMonthlyInterest()).toBe(parseFloat(666.67).toFixed( 2 ));
	});

	it("total double interest amount calculations are valid", function () {
		expect(terms.getDoubleInterest()).toBe(160000);
	});

});

describe("Vehicle Constructor ", function () {
	
	var whip = new Vehicle( "Ford", "F-150" );

	it("the brand name of the vehicle", function () {
		expect(whip.company()).toBe("Ford is the brand name of this vehicle.");
	});

	it("the model of the vehicle", function () {
		expect(whip.vehicleModel()).toBe("F-150 is the model of this vehicle.");
	});

	it("the miles that are on the vehicle", function () {
		expect(whip.drive(67700)).toBe("67700 miles are on this vehicle.");
	});

	it("the miles at the last oil change", function () {
		expect(whip.oilChangeMiles(65000)).toBe("65000 was the milage when last serviced.")
	});

	it("the miles added to the vehicle since last servied", function () {
		expect(whip.milesSinceServiced()).toBe("2700 miles have been driven since last service.");
	});

});

describe("Netflix Constructor ", function () {

	// one test since there are no calculations...

	var clips = new Netflix( "Half Baked", 1998, "Comedy" );

	it("five star rated item", function () {
		expect(clips.starFive()).toBe("If Half Baked 1998 Comedy is rated with five stars, you better watch it!");
	});
});

