const request = require('request')

const responseAPI = (status, message, data) => ({
    status,
    message,
    data
})

function getCurrentRound() {
    var minute = 60 * 1000;
    var round = parseInt(moment().valueOf() / minute) * (minute);
    return round;
}

function getPreviousRound() {
    var minute = 60 * 1000;
    var round = parseInt(moment().valueOf() / minute) * (minute) - minute;
    return round;
}

function makeRequest(objRequest) {
    request({
            uri: objRequest.url,
            method: objRequest.method,
            form: objRequest.form,
            headers: objRequest.headers
        },
        function (error, response, body) {
            objRequest.callback(body);
        }
    );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getLimitOffsetFilterFromRequest(req) {
    var page = parseInt(req.query.page, 10)
    var limit = parseInt(req.query.limit, 10)
    var filter = req.query.filter
    var sort = req.query.sort
    var type = req.query.sortType


    var offset = 0
    if (page) {
        offset = (page - 1) * limit
    }
    if (!filter) {
        filter = ""
    }

    return {
        limit,
        offset,
        filter,
        sort,
        type
    }
}

function generateLimitAndSort(paging) {
    var sql = " ORDER BY `%SORT%` %TYPE% LIMIT %OFFSET%,%LIMIT%"
    sql = sql.replace("%SORT%", paging.sort)
    sql = sql.replace("%TYPE%", paging.type)
    sql = sql.replace("%OFFSET%", paging.offset)
    sql = sql.replace("%LIMIT%", paging.limit)

    return sql

}

function generateFilter(filter, fields) {
    var sql = "CONCAT(%FIELDS%)  LIKE '%FILTER%'";
    sql = sql.replace("%FIELDS%", fields)
    sql = sql.replace("%FILTER%", "%" + filter + "%")
    return sql
}


function generateTotalRecord(sql) {
    var arrSplit = sql.split('FROM');

    if (arrSplit.length != 2) {
        return null
    }
    var result = "SELECT count(*) as total_record FROM" + arrSplit[1]
    return result
}

function resultMatch(player1, sroce, person) { // luc nao cung la play1, play 2 la nguoc lai play1
    let point;
    let result = sroce.split('-');
    if(result.length == 2) {
        point = Number(result[0]) > Number(result[1]) ? 3 : (Number(result[0]) == Number(result[1]) ? 1 : 0);
    }
    else {
        point = sroce.includes(player1) ? 0 : 3;
    }

    if(person == 2 && point !=1) { // la nguoi 2
        point = (point == 3 ? 0 : 3)
    }
    return point;
}

module.exports = {
    responseAPI,
    getCurrentRound,
    getPreviousRound,
    makeRequest,
    getRandomInt,
    getLimitOffsetFilterFromRequest,
    generateLimitAndSort,
    generateFilter,
    generateTotalRecord,
    resultMatch
}