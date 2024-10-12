const assert = require('assert')

describe('Open KasirAja', ()=>{
    it('should open browser and redirect to kasiraja', () =>{
        //Buka Browser dan URL
        await browser.url('https://kasirdemo.vercel.app/login')

        //Assert?
        //Url sudah benar atau belum?

        const currentURL = await browser.getUrl();
        const expectedURL = 'https://kasirdemo.vercel.app/login'

        await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    });
});