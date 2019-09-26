const TYPE = "MY_ERROR"

function reponseErrorAPI(res, error, defaultErrorMessage) {
    if (error.type == TYPE) {
        res.send(md.responseAPI(false, error.message, null))
    } else {
        res.send(md.responseAPI(false, defaultErrorMessage, null))
    }
}

function generate(message) {
    return {
        type: TYPE,
        message
    }
}


module.exports = {
    TYPE,
    reponseErrorAPI,
    generate
}