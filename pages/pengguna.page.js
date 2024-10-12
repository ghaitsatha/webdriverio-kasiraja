const Page = require('./page')

class createUser extends Page {
    get namaInput(){
        return $('nama');
    }
    get emailInput(){
        return $('email');
    }
    get passwordInput(){
        return $('password');
    }
    get saveButton(){
        return $('#button');
    }

    get errorMsg(){
        return $('//*[@data-test="eror"]');
    }

    async login(email, password){
        await this.namaInput.setValue(nama);
        await this.emailInputInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.saveButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();