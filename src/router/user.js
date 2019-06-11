const { loginCheck } = require('../controller/user.js') 
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleUserRouter = (req, res) => {
    const method = req.method //Check the request method, GET or POST
    // const url = req.url
    // const path = url.split('?')[0]


    if (method === 'POST' && req.path === '/api/blog/login') {
        const { username, password } = req.body
        const result = loginCheck (username, password)
        if(result) {
            return new SuccessModel(result, 'login Successfully')
        }
        return new ErrorModel(result, 'Fail Login')
    }
}

module.exports = handleUserRouter