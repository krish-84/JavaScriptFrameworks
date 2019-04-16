describe('Checking home page title', function() {
    it('should have the right title', function () {
        browser.url('/webdriverio-course-content');

        var title = browser.getTitle();
        expect(title).to.equal('Robot Parts Emporium');

        browser.click('.shop-callout a');

        var productTitle = browser.getTitle();
        expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        expect(url).to.include('product-page.html', 'URL mismatch')

    });   
});








