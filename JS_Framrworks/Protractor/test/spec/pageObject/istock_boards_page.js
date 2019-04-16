class Boards {

	get createTitle() { return $('.title > h3'); }
	get close() { return element(by.css('div.title > a')); }


}

module.exports = new Boards();