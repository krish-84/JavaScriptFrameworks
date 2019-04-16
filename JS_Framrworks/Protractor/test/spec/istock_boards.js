var menuPage = require('./pageObject/istock_homepage_navbar_page.js');
var boards = require('./pageObject/istock_boards_page.js');

describe('navigate to board page', function() {

	beforeEach(function() {
		browser.get("https://www.istockphoto.com/in");
		browser.waitForAngular();
	});

	it('it should navigate to Board page', function(){

      	menuPage.navBoards().perform();

      	// EC
      	browser.wait(EC.presenceOf(element(by.linkText('Create Board'))), 5000); 

      	menuPage.navCre().click().perform();

      	expect(boards.createTitle.getText()).toContain('Create new Board');


   });

	it('should close the board model box', function() {

		menuPage.navBoards().perform();

		// EC
      	browser.wait(EC.presenceOf(element(by.linkText('Create Board'))), 5000); 

      	menuPage.navCre().click().perform();

      	// EC
      	browser.wait(EC.presenceOf(boards.close), 5000);

      	boards.close.click();

      	// EC
      	browser.wait(EC.invisibilityOf(boards.createTitle), 5000);

      	expect(boards.createTitle.isDisplayed()).toBe(false);


	});

});