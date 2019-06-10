const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

const serverHandle = (req, res) => {
    //设置返回的格式为JSON格式
    res.setHeader('Content-type', 'application/json')
    const url = req.url
    req.path = url.split('?')[0]
    
    //If there is blogData, return it
    const blogData = handleBlogRouter(req, res) 
    if (blogData) {
        console.log('blogData', blogData)
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

     //If there is userData, return it
    const userData = handleUserRouter(req, res)
    if(userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    //if it doesn't match any router, return error
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write("404 not found!!!\n")
    res.end()
}


module.exports = serverHandle

// env: process.env.NODE_ENV