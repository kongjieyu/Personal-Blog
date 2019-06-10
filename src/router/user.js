const handleUserRouter = (req, res) => {
    const method = req.method //Check the request method, GET or POST
    // const url = req.url
    // const path = url.split('?')[0]


    if (method === 'POST' && req.path === '/api/blog/login') {
        return {
            msg: 'this is the interface of login'
        }
    }
}

module.exports = handleUserRouter