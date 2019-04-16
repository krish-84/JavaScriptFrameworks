var menuPage = require('./pageObject/istock_homepage_navbar_page.js');

describe("navigate to proper navigation tab",function() {

	beforeEach(function() {
		browser.get("https://www.istockphoto.com/in");
		browser.waitForAngular();
	});

   it("it should navigate to Photos page", function(){

      menuPage.dropdown('Photos').click();
      expect(menuPage.headtext(true)).toContain('Browse stock photos');  

   });

   it("it should navigate to Illustrations page", function(){

      menuPage.dropdown('Illustrations').click();
      expect(menuPage.headtext(true)).toContain('Explore vector');  

   });

   it("it should navigate to Vidoe page", function(){

      menuPage.dropdown('Video').click();
      expect(menuPage.headtext(true)).toContain('Discover HD video');  

   });

   it("it should navigate to Audio page", function(){

      menuPage.dropdown('Audio').click();
      //var text = menuPage.otherTitle.getText();
      expect(menuPage.headtext(false)).toContain('iStock Audio has moved');  

   });

   it("it should navigate to Pricing page", function(){

      menuPage.pricing.click();
      expect(menuPage.pricingTitle.getText()).toContain('Save with flexible');  

   });

   it("it should navigate to Join page", function(){

      menuPage.join.click();
      expect(menuPage.joinTitle.getText()).toContain('Join');  

   });

   it("it should navigate to Board page", function(){

      menuPage.navBoards().perform();

      var EC = protractor.ExpectedConditions;
      browser.wait(EC.presenceOf(element(by.linkText('Create Board'))), 5000); 

      menuPage.navCre().click().perform();

   });



});