const db = require('./db')


function checkExit(id) {
    return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM `tb_season` WHERE id = ?";
            db.findOneQuery(sql, [id])
            .then(data=>{
                resolve(true);
            })
            .catch(error=> {
                resolve(false);
            })
    })
}


module.exports = {
    checkExit
}