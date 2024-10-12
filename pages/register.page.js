const Page = require('./page')

class RegisterPage extends Page {
    get nameInput(){
        return $('name');
    }
    get emailInput(){
        return $('email');
    }
    get passwordInput(){
        return $('password');
    }
    get registerButton(){
        return $('#submit');
    }

    get errorMsg(){
        return $('//*[@data-test="eror"]');
    }

    async register(name, email, password){
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.registerButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new RegisterPage();