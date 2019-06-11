const { getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog } = require('../controller/blog.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
    const method = req.method //Check the request method, GET or POST
    console.log('method: ', method)
    const id = req.query.id
    const blogData = req.body
    // const url = req.url
    // const path = url.split('?')[0]

    //get the blog lish 
    if (method === 'GET' && req.path === '/api/blog/list') {
        console.log('list')
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const dataList = getList(author, keyword)

        return new SuccessModel(dataList, 'get the data list')
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        console.log('detail')

        const data = getDetail(id)

        return new SuccessModel(data, 'get the blog detail')
    }

    if (method === 'POST' && req.path === '/api/blog/new') {

        const data = newBlog(blogData)

        return new SuccessModel(data, 'make a new blog')
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id,blogData)
        if(result){
            return new SuccessModel(result, 'update the blog')
        } else {
            return new ErrorModel(result, 'fail to update the blog')
        }

    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        const delResult = delBlog(id)
        if(delResult){
            return new SuccessModel(delResult, 'successfully delete the blog')
        } else {
            return new ErrorModel(delResult, 'fail to delete the blog')
        }
    }
}

module.exports = handleBlogRouter