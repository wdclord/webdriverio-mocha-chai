import Page from "../page";

class ContactInfoPage extends Page {

    get fullNameField(){
        return $('#wizard-asset-tokens-your-full-name');
    }

    get emailField(){
        return $('#wizard-asset-tokens-email');
    }

    get phoneField(){
        return $('#wizard-asset-tokens-mobile-phone');
    }

    get telegramConcactField(){
        return $('#wizard-asset-tokens-telegram-contact');
    }

    get nextButton(){
        return $('#next');
    }

    getValidationText(field) {
        const validationText =field.$('../../..').$('.ant-form-explain').getText();

        return validationText;
    }

}

export default new ContactInfoPage();
