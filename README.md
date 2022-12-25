Installation:

```
npm i puppeteer-proxy-tester
```

Supported protocols: http https socks4 socks5

Arguments: 
1. proxy
2. timeout

Usage:

```js
const proxy_tester = require("puppeteer-proxy-tester")

proxy_tester("socks4://user:pass@proxy_ip:proxy_port")
proxy_tester("socks5://proxy_ip:proxy_port", 3000)
proxy_tester("http://user:pass@proxy_ip:proxy_port", 1000)
proxy_tester("https://proxy_ip:proxy_port")
```