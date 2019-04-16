//ES6 Class

class Login {

	get signin() { return element(by.linkText('Sign in')); }
	get signout() { return element(by.id("hypSignOut")); }
	get username() { return element(by.id('new_session_username')); }
	get password() { return element(by.id('new_session_password')); }
	get button() { return element(by.id('sign_in')); }
	get menu() { return element(by.css('.wide-header.right-off-canvas-toggle-menu')); }
	get alert() { return element(by.className("alert_box")); }


	appLogin(username, password) {
		this.signin.click();
		this.username.sendKeys(username);
		this.password.sendKeys(password);
		this.button.click();
	}

	appLogout() {
		this.menu.click();
		this.signout.click();
		return (this.signin.isDisplayed())
	}


}

module.exports = new Login();