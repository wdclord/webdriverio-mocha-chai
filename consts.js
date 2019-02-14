const {
	BROWSER = 'chrome',
} = process.env;

const BASE_URL = 'https://wallet.latoken.com/tokenization/asset-tokens';

module.exports = {
	...process.env,
	BASE_URL,
	BROWSER,
};
