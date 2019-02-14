import Page from "../page";

class ProjectInfoPage extends Page {

    get projectNameField(){
        return $('#wizard-asset-tokens-project-name');
    }

    get projectWebsiteField(){
        return $('#wizard-asset-tokens-project-website');
    }

    get projectDescriptionField(){
        return $('#wizard-asset-tokens-project-description');
    }

    get projectIndustryField(){
        return $('#wizard-asset-tokens-project-industry');
    }

    get planToUseField(){
        return $('#wizard-asset-tokens-plan-to-use');
    }

    get valuationField(){
        return $('#wizard-asset-tokens-asset-token-valuation');
    }

    get submitButton(){
        return $('#submit-request');
    }

    get successMessage(){
        return $('#UNKNOWNSELECTOR');
    }

    selectAssetTypeByIndex(index){
        $('#wizard-asset-tokens-asset-type .ant-select').click();

        const options = $$('li[role=option]');

        options[index].click();
    }
}

export default new ProjectInfoPage();
