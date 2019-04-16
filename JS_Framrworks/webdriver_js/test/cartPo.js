var cart = require("./cart.page.js");

describe("Cart Funcionality", function () {

	beforeEach(function () {
		browser.url("/webdriverio-course-content/product-page.html");
	});

	it("should only let you buy after setting a quantity", function () {

		var isBtnEnabled = cart.btn.isEnabled();
		expect(isBtnEnabled, "'buy now' should be disabled to begin").to.be.false;

		// Add qty
		cart.qty.setValue(10);

		isBtnEnabled = cart.btn.isEnabled();
		expect(isBtnEnabled, "'buy now' is now enabled").to.be.true;
	});

	describe("checkout process", function () {
		beforeEach(function () {
			// Add qty
			cart.qty.setValue(10);

			// Click "buy now"
			cart.btn.click();

		});

		it("should disable buy now button during processing", function () {

			// verify "buy now" is disabled
			var isBtnEnabled = cart.btn.isEnabled();
			expect(isBtnEnabled, "'buy now' should be disabled after clicking").to.be.false;

			var btnText = cart.btn.getText();
			expect(btnText, "verify 'btn now' text has changed").to.include("Purchasing");
		});

		it("should show a thank you message with qty and type", function () {

			// waitForExist "thank you message"
			cart.thankYou.waitForExist(3000);

			// verify is has proper qty and type
			var thankText = cart.thankYou.getText();
			expect(thankText).to.contain("10 T-800 Model 101");
		});
	});
});