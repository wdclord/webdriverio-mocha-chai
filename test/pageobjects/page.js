export default class Page {
	get body() {
		return $('body');
	}

	open(path) {
		browser.url(path);
	}

	pressEnter() {
		browser.keys('Enter');
	}
}
