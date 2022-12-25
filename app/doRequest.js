const puppeteer = require("puppeteer")
const useProxy = require('puppeteer-page-proxy');

function doRequest(proxy, url, timeout = 5000){
    return new Promise((resolve, reject) => {
        puppeteer.launch({
            args: ["--headless=chrome"],
            ignoreDefaultArgs: true,
        }).then(async (browser) => {
            let page = await browser.newPage()
            let resolved = false

            if(proxy !== "direct://"){
                try {
                    try {
                        new URL(proxy)

                        useProxy(page, proxy).catch(() => {
                            resolved = true
                            resolve(false)
                        })
                    } catch (err){
                        resolved = true
                        resolve(false)
                    }
                } catch (err) {
                    resolved = true
                    resolve(false)
                }
            }

            page.goto(url, {timeout}).then(() => {
                if(!resolved){
                    resolve(true)
                }

                browser.close().catch(() => {
                    if(!resolved){
                        resolve(false)
                    }
                })
            }).catch(() => {
                if(!resolved){
                    resolve(false)
                }
            })
        }).catch(() => resolve(false))
    })
}

module.exports = doRequest