const { getList, getDetail } = require('../controller/blog.js')
const { SuccessModel,ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
    const method = req.method //Check the request method, GET or POST
    console.log('method: ', method)
    // const url = req.url
    // const path = url.split('?')[0]

    //get the blog lish 
    if (method === 'GET' && req.path === '/api/blog/list') {
        console.log('list')
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const dataList = getList(author,keyword)

        return new SuccessModel(dataList, 'get the data list')
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        console.log('detail')
        const id = req.query.id || ''
        const data = getDetail(id)

        return new SuccessModel(data, 'get the blog detail')
    }

    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: 'this is the interface of making a new blog'
        }
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: 'this is the interface of update a new blog'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: 'this is the interface of delete a new blog'
        }
    }
}

module.exports = handleBlogRouter