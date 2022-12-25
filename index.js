let doRequest = require("./app/doRequest.js")

function testProxy(proxy, timeout){
    return new Promise(async (resolve) => {
        let results = await Promise.all([
            doRequest(proxy, "https://www.google.com", timeout),
            doRequest(proxy, "https://www.youtube.com", timeout),
        ])

        let good = true
        for(let i = 0; i < results.length; i++){
            if(!results[i]) {
                good = false
                break
            }
        }

        resolve(good)
    })
}

module.exports = testProxy