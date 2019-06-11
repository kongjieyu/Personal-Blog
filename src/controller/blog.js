const getList = (author, keyword) => {
    //return the fake data at this stage (but the format is correct)
    return [
        {
            id: 1,
            title: 'My first design work',
            content: 'Content: Happy Javascript website',
            Author: 'May'
        },
        {
            id: 2,
            title: 'My Second design work',
            content: 'Content: Happy 2 Javascript website',
            Author: 'Ben'
        },
    ]
}

const getDetail = (id) => {
    //return the fake data at this stage (but the format is correct)
    return [
        {
            id: 1,
            title: 'My first design work',
            content: 'Content: Happy Javascript website',
            Author: 'May'
        }
    ]
}

const newBlog = (blogData = {}) => {
    //blogData是个博客对象，包含title, content属性
    console.log('newBlog blogdata: ', blogData)
    return {
        id: 3 //新建博客的id， 递增
    }
}

const updateBlog = (id, blogData = {}) => {
    //id 就是要更新博客的id
    //blogData是个博客对象，包含title, content属性
    console.log('id: ', id , 'blogData ', blogData)
    return true
}

const delBlog = (id) => {
    console.log('delete blog id ' , id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}