const serverHandle = (req, res) => {
    //设置返回的格式为JSON格式
    res.setHeader('Content-type', 'application/json')
        //定义的数据
    const resData = {
        name : 'MayJieyu',
        site : "Blog",
        env: process.env.NODE_ENV
    }
    res.end(
        JSON.stringify(resData)

    )
}


module.exports = serverHandle