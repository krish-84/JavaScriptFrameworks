const { Given, When, Then } = require('cucumber');

Given('I open the home page', function() {
	browser.url('./');
})

When('I click the New In button', function() {
	browser.click('[title="New In"]');
})

/*
Then('I expect to be on the home page', function() {
	var title = browser.getTitle();
	expect(title).to.be.equal('TOPMAN - Mens Fashion - Mens Clothing - Topman');
})

Then('I expect to be on the product page', function() {
	var prodTitle = browser.getTitle();
	expect(prodTitle).to.be.equal('New This Week - Topman');

	var url = browser.getUrl();
	expect(url).to.include('new-this-week', 'URL mismatch');
})
*/
Then(/I expect to be on the (\w+) page/, function(pageName) {

	var pages = {
		home: {
			url: '/',
			title: 'TOPMAN - Mens Fashion - Mens Clothing - Topman'
		},
		product: {
			url: 'new-this-week',
			title: 'New This Week - Topman'
		}
	};

	var page = pages[pageName];

	var prodTitle = browser.getTitle();
	expect(prodTitle).to.be.equal(page.title);

	var url = browser.getUrl();
	expect(url).to.include(page.url, 'URL mismatch');
})

