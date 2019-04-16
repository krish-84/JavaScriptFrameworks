
exports.config = {

  onPrepare: function() {

    // global var ser for Expected conditions
    global.EC = protractor.ExpectedConditions;

    // To maximize the window
    browser.driver.manage().window().maximize();

    // To Allure Reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test/spec/istock_boards.js'],

  exclude:['./page-objects/*.js'],

  //baseUrl: 'http://juliemr.github.io' + '/protractor-demo/',

  getPageTimeout: 10000,

  allScriptsTimeout: 5000,

  reporters: ['dot', 'allure'],

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};