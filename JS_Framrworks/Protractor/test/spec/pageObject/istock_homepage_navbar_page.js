//ES6 Class

class MenuPage {

	get title() { return $('.static-hero h1'); }
	get otherTitle() { return $('.hero-title'); }
	get pricing() { return $('.pricing'); }
	get pricingTitle() { return $('.stills-pnp-content > h1'); }
	get join() { return element(by.linkText('Join')); }
	get joinTitle() { return $('h1'); }
	get boards() { return $('#open_board'); }
	get createBtn() { return element(by.linkText('Create Board')); }

	dropdown(navItem) {
		return element(by.css('.nav-root')).element(by.linkText(navItem));
	}
	/*
	headtext() { 
		return this.title.getText();
					
	}
	*/

	headtext(cond) {
		if(cond) {
			return this.title.getText();
		} else {
			return this.otherTitle.getText();
		}
	}

	navBoards() {
		return browser.actions().mouseMove(this.boards);
	}

	navCre() {
		return browser.actions().mouseMove(this.createBtn);
	}

}

module.exports = new MenuPage();