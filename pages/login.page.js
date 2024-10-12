const Page = require('./page')

class LoginPage extends Page {
    get emailInput(){
        return $('email');
    }
    get passwordInput(){
        return $('password');
    }
    get loginButton(){
        return $('#submit');
    }

    get errorMsg(){
        return $('//*[@data-test="eror"]');
    }

    async login(email, password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();