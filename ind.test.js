



const puppeteer = require('puppeteer');

let browser;


    (async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10000
        });
        const page = await browser.newPage();

        const navigationPromise = page.waitForNavigation();

        await page.setViewport({ width: 1440, height: 712 });

        await page.goto('https://www.jianshu.com/');
        await page.waitForSelector('#menu > .nav > .search > form > #q');

        await page.click('#menu > .nav > .search > form > #q');

        await page.type('#menu > .nav > .search > form > #q',"hahaha");


        await page.waitForSelector('.nav > .search > form > .search-btn > .iconfont');
        await page.click('.nav > .search > form > .search-btn > .iconfont');

        await navigationPromise;

        await browser.close()
    })();

