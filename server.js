const https = require('https')

const port = 443;
const httpsOptions = {
    key: fs.readFileSync('./certificate/private.pem'),
    cert: fs.readFileSync('./certificate/private.pem')
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



