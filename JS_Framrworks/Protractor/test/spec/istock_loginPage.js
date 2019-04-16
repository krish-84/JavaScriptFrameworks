var login = require('./pageObject/istock_login_page.js');
var data = require('../dataFiles/logindata.json');

describe("istock login page validations",function() {

	beforeEach(function() {
		browser.get("https://www.istockphoto.com/in");
		browser.waitForAngular();
	});

   it("it should navigate to istock homepage", function(){

     expect(login.signin.isDisplayed()).toBe(true);  

   });


   it("it should test valid credentials for application", function(){

   	login.appLogin(data[1].Username, data[1].Password);
   	expect(login.menu.isDisplayed()).toBe(false);

   });


   it("it should logout the application", function(){

   	var result = login.appLogout();
   	expect(result).toBe(true);

   });


   it("it should test invalid credentials for application", function(){

      login.appLogin(data[0].Username, data[0].Password);
      expect(login.alert.getText()).toEqual("Those details don't match our records. Double-check and try again.");

   });



});