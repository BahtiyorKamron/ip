const db = require('../util/pg')
const requestIp = require('request-ip')
async function dropip(req,res){
    let clientIp = requestIp.getClientIp(req);
    let ip = await db(false,'insert into ip(user_ip) values($1) returning *',clientIp)
    res.send('./views/index.html')
}
module.exports = dropip