const request = require('request');
const config = require('../config')

function sendMessage(message) {

    if (config.ENV == "DEBUG") {
        return
    }

    let bot_token = "488462967:AAGbBZBp-xcSTSIUbo8-lUWSR_SItuntU0k";
    let website = "https://api.telegram.org/bot" + bot_token;
    let data = {
        "chat_id": "@devteammonitor",
        "parse_mode": "markdown",
        "text": `${config.VAR_APPLICATION_NAME} - ENV: *${config.ENV}* - ${message}`,
    }
    let link = website + "/sendmessage";
    request({
            uri: link,
            method: "POST",
            form: data,
        },
        function (error, response, body) {
            if (error) {
                //console.log((error.message));
            } else {

                //console.log(response);
            }
        }
    );

}
module.exports = {
    sendMessage
}