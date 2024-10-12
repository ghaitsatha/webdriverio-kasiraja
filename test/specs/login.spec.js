const assert = require('assert')

describe('Login KasirAja', ()=>{
    it('shoul login successfully with valid credential', () =>{
        //Buka Browser dan URL
        await browser.url('/')

        //input username
        await $('#email').setValue('toko.testing@tes.com');
        //input password
        await $('#password').setValue('admin123');
        //klik login
        await $('#submit').click();

        //dashboard
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard.html')
        
    })
})