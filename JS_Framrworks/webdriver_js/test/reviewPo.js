var reviewForm = require("./review.page.js");

describe("Homepage FAQ Accordion", function () {
	beforeEach(function(){
		browser.url('/webdriverio-course-content/product-page.html');
	})

	it("should add a review when submitted properly", function() {

		reviewForm.submit("email@example.com", "This is the review")
		reviewForm.submit();

		var hasReview = browser.isExisting(".comment=This is the review")
		expect(hasReview, "Comment text exists").to.be.true;
	});

	it('should show an error message if the input is wrong', function () {

		//assert that error message isn't showing to start
		var isErrorShowing = reviewForm.formError.isVisible();
		expect(isErrorShowing).to.be.false;

		//submit form withour entering content
		reviewForm.submit();

		//assert that error message is now showing
		var isErrorShowing = reviewForm.formError.isVisible();
		expect(isErrorShowing).to.be.true;

	});

	it.only('should hide the error message when input is corrected', function () {

		//submit form without entering content
		reviewForm.submit();

		// assert that error message is now showing
		var isErrorShowing = reviewForm.emailError.isVisible();
		expect(isErrorShowing).to.be.true;

		reviewForm.submit("email@example.com");

		// move focus
		reviewForm.content.click();

		var isErrorShowing = reviewForm.emailError.isVisible();
		expect(isErrorShowing).to.be.false;

		reviewForm.submit("email@example.com", "This is the review");


		var isMainErrorShowing = reviewForm.reviewError.isVisible();
		var isContentErrorShowing = reviewForm.formError.isVisible();

		expect(isMainErrorShowing).to.be.false;
		expect(isContentErrorShowing).to.be.false;


	});

	it('should focus on the first invalid input field on error', function () {

		var emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should not have focus").to.be.false;

		browser.submitForm("form");

		emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should now have focus").to.be.true;

		browser.setValue("#review-email", "valid@example.com");
		browser.submitForm("form");

		var contentHasFocus = browser.hasFocus("#review-content");
		expect(contentHasFocus, "review content should have focus").to.be.true;


	});

});