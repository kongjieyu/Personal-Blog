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

module.exports = {
    getList,
    getDetail
}