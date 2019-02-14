import Page from './page';

class BrowserObject extends Page {
	/**
	 * Elements
	 */
	get body() {
		return $('body');
	}

	/**
	 * Actions
	 */
	openMainPage() {
		super.open('');
	}
}

export default new BrowserObject();
