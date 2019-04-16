browser.addCommand("submitReview", function (email, review) {
	if (email) {
		// Enter the email address
		browser.setValue("#review-email", email);
	}

	if (review) {
		// Enter text in the comment form
		browser.setValue("#review-content", review)
	}

	browser.submitForm("#review-content");

})


describe("Homepage FAQ Accordion", function () {
	beforeEach(function(){
		browser.url('/webdriverio-course-content/product-page.html');
	})

	it("should add a review when submitted properly", function() {

		browser.submitReview("email@example.com", "This is the review");
		browser.submitReview();

		var hasReview = browser.isExisting(".comment=This is the review")
		expect(hasReview, "Comment text exists").to.be.true;
	});
});