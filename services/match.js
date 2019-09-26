var XLSX = require('xlsx');
const season = require('./season');
const db = require('./db')
const utils = require('../lib/utility');

function readFileAndInsertDB(req) {
    return new Promise(async (resolve, reject) => {
        let season_id = req.body.season_id;
        let checkSeason = await season.checkExit(season_id);
        if (checkSeason) {
            var data = readFile(req.file.path);
            if (data.length > 0) {
                var sql = "INSERT INTO `tb_match` (id, season_id, `group`, match_code, player1, player2, `time`, `date`, venue, score) VALUES ";
                for (let i = 0; i < data.length; i++) {
                    let { id, group, time, date, venue, score } = data[i];
                    let match_code = data[i]['match code'];
                    let player1 = data[i]['player 1'];
                    let player2 = data[i]['player 2'];
                    sql += ` (${id}, ${season_id}, '${group}', '${match_code}', '${player1}', '${player2}', '${time}', '${date}', '${venue}', '${score}'),`
                }
                sql = sql.slice(0, -1)
                db.excuteQuery(sql, [])
                    .then(data => {
                        resolve(data)
                    })
                    .catch(error => {
                        reject(error);
                    })
            } else {
                reject('no data')
            }
        } else {
            reject('Season not exist');
        }
    })
}


function readFile(path) {
    var workbook = XLSX.readFile(path, { raw: true }); //raw: plain text parsing will not parse values **
    var sheetList = workbook.SheetNames;
    if (sheetList.length > 0) {
        var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetList[0]]);
        return data;
    } else {
        return false;
    }
}

function getListResultBySeasonGroupPlayer(season_id) {
    return new Promise(async (resolve, reject) => {
        let checkSeason = await season.checkExit(season_id);
        if (!checkSeason) {
            reject('Season not exist')
        } else {
            let list = await getListMatch(season_id);
            if (list.length > 0) {
                let arrPlayer = listPlayer(list);
                let arrResult = []
                for (let i = 0; i < arrPlayer.length; i++) {
                    const player = arrPlayer[i];
                    let sum = 0, totalMatch = 0, lose = 0, win = 0, draw = 0;
                    for (let j = 0; j < list.length; j++) {
                        const data = list[j];
                        let { player1, player2, score } = data;
                        if (player1 == player) {
                            let point1 = utils.resultMatch(player1, score, 1)
                            sum += point1;
                            point1 == 1 ? draw++ : (point1 == 3 ? win++ : lose++)
                            totalMatch++;
                        }
                        if (player2 == player) {
                            let point2 = utils.resultMatch(player1, score, 2)
                            sum += point2;
                            point2 == 1 ? draw++ : (point2 == 3 ? win++ : lose++)
                            totalMatch++;
                        }
                    }
                    arrResult.push({ player, point: sum, total_Match: totalMatch, win, lose, draw });
                    sum = totalMatch = win = lose = draw = 0;
                }
                resolve(arrResult);
            } else {
                resolve({});
            }
        }
    })
}

function getListMatch(season_id) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT  * FROM `tb_match` WHERE season_id = ?";
        db.findAllQuery(sql, [season_id])
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error)
            })
    })
}

function listPlayer(list) {
    let arrPlayer = []; //lay danh sach player
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        let { player1, player2 } = element;
        if (!arrPlayer.includes(player1)) {
            arrPlayer.push(player1)
        }
        if (!arrPlayer.includes(player2)) {
            arrPlayer.push(player2)
        }
    }
    return arrPlayer;
}

function searchByKeyword(keyWord) {
    return new Promise((resolve, reject) => {
        sql = `SELECT m.*, s.name, s.description FROM tb_match m, tb_season s WHERE m.season_id = s.id AND (m.player1 like '%${keyWord}%' OR m.player2 like '%${keyWord}%' OR s.name like '%${keyWord}%')`;
        db.findAllQuery(sql, [keyWord, keyWord, keyWord])
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })
}


module.exports = {
    readFileAndInsertDB,
    getListResultBySeasonGroupPlayer,
    searchByKeyword
}