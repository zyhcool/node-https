const https = require('https')
const fs = require('fs');
const path = require('path')

const port = 443;
const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, './certificate/private.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './certificate/ca.crt'))
}


https
    .createServer(httpsOptions, async (req, res) => {
        console.log(`this is https`)
        res.statusCode = 200;
        res.end();
    })
    .listen(port, () => {
        console.log(`listen at ${port}`)
    })