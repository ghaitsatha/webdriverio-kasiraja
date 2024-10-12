const Page = require('./page')

class createCategory extends Page {
    get namaInput(){
        return $('nama');
    }
    get deskripsiInput(){
        return $('deskripsi');
    }
    get saveButton(){
        return $('#button');
    }

    get errorMsg(){
        return $('//*[@data-test="eror"]');
    }

    async login(email, password){
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
        await this.saveButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new CategoryPage();