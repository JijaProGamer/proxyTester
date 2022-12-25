const puppeteer = require("puppeteer")
const useProxy = require('puppeteer-page-proxy');

function doRequest(proxy, url, timeout = 5000){
    return new Promise((resolve, reject) => {
        puppeteer.launch({
            args: ["--headless=chrome"],
            ignoreDefaultArgs: true,
        }).then(async (browser) => {
            let page = await browser.newPage()
            await useProxy(page, proxy);

            page.goto(url, {timeout}).then(() => {
                browser.close().catch(() => resolve(false))
                resolve(true)
            }).catch(() => resolve(false))
        }).catch(() => resolve(false))
    })
}

module.exports = doRequest