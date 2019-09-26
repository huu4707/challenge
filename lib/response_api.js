const MY_ERROR = 'MyError'
const DEFAULT_MESSAGE = 'Something wrong. Please try again!'

function responseAPISuccess(res, data = [], message = '', statusCode = 200) {
    const response = {
        status: true,
        data,
        message
    }
    return res.status(statusCode).send(response)
}

function responseAPIError(res, error = null, message = '', data = []) {
    console.log('TCL: responseAPIError -> error', error)
    let msg = ''
    let statusCode = 200

    if (!message && error) {
        msg = isMyError(error) ? error.message : DEFAULT_MESSAGE
    } else {
        msg = message
    }

    if (error && error.statusCode) {
        statusCode = error.statusCode
    }

    const response = {
        status: false,
        data,
        message: msg
    }
    return res.status(statusCode).send(response)
}

function isMyError(error) {
    return error.name == MY_ERROR
}

module.exports = {
    responseAPIError,
    responseAPISuccess
}