import {expect} from 'chai';
import Browser from '../pageobjects/browser.object';
import ContactInfoPage from '../pageobjects/asset.tokens/contact.info.page';
import ProjectInfoPage from '../pageobjects/asset.tokens/project.info.page';

describe('Asset tokens tests', () => {

    it('Submit asset tokens request', () => {

        Browser.openMainPage();

        ContactInfoPage.fullNameField.setValue('Maxim');
        ContactInfoPage.emailField.setValue('latoken@example.com');
        ContactInfoPage.phoneField.setValue('+1-541-754-3010');
        ContactInfoPage.telegramConcactField.setValue('@example');
        ContactInfoPage.nextButton.click();

        ProjectInfoPage.projectNameField.setValue('LatokenTest');
        ProjectInfoPage.projectWebsiteField.setValue('http://test.com');
        ProjectInfoPage.projectDescriptionField.setValue('marvelous project');
        ProjectInfoPage.selectAssetTypeByIndex(0);
        ProjectInfoPage.projectIndustryField.setValue('Commodity');
        ProjectInfoPage.planToUseField.setValue('Make money');

        ProjectInfoPage.valuationField.setValue('150');

        ProjectInfoPage.submitButton.click();

        //TODO https://wallet.latoken.com/api/v1/tokenization-leads response with 500 status code
        // expect(
        //     ProjectInfoPage.successMessage.isDisplayed(),
        //     'Success message is not displayed'
        // ).to.be.true;
    });

    it('Contact info empty fields validation', () => {

        const expectedText = 'Please fill in this field!';

        Browser.openMainPage();

        ContactInfoPage.nextButton.click();

        const fullNameValidationText = ContactInfoPage.getValidationText(ContactInfoPage.fullNameField);
        const emailValidationText = ContactInfoPage.getValidationText(ContactInfoPage.emailField);
        const phoneValidationText = ContactInfoPage.getValidationText(ContactInfoPage.phoneField);
        const telegramContactValidationText = ContactInfoPage.getValidationText(ContactInfoPage.telegramConcactField);

        expect(fullNameValidationText).to.be.equal(expectedText);
        expect(emailValidationText).to.be.equal(expectedText);
        expect(phoneValidationText).to.be.equal(expectedText);
        expect(telegramContactValidationText).to.be.equal(expectedText);

    })
});