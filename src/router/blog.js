const handleBlogRouter = (req, res) => {
    const method = req.method //Check the request method, GET or POST
    console.log('method: ', method)
    const url = req.url
    const path = url.split('?')[0]

    //get the blog lish 
    if (method === 'GET' && path === '/api/blog/list') {
        console.log('list')
        return {
            msg: 'this is the blog list interface'
        }
    }
    if (method === 'GET' && path === '/api/blog/detail') {
        console.log('detail')
        return {
            msg: 'this is the blog detail interface'
        }
    }
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: 'this is the interface of making a new blog'
        }
    }
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: 'this is the interface of update a new blog'
        }
    }
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: 'this is the interface of delete a new blog'
        }
    }
}

module.exports = handleBlogRouter