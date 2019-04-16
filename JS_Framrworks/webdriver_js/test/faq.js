describe("Homepage FAQ Accordion", function () {
	beforeEach(function(){
		browser.url('/webdriverio-course-content');
	})

	it("should show first section on page load", function() {
		var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");
		expect(firstHeight.parsed.value).to.be.greaterThan(0);
	});

	it("should not show other content", function() {
		var secondDisplay = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display");
		expect(secondDisplay.value).to.equal("none");
	});

	it("should expand/hide content on click", function() {
		this.timeout(15000);
		browser.click(".accordion .accordion-item:nth-of-type(2) a");
		browser.pause(500);
		var secondHeight = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "height");
		console.log(secondHeight);
		expect(secondHeight.parsed.value).to.be.greaterThan(0);

		var firstDisplay = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "display");
		console.log(firstDisplay);
		expect(firstDisplay.value).to.equal("none");
	}); 

});