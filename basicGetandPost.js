const http = require('http')

//GET
// const querystring = require('querystring')
// const server = http.createServer((req,res)=>{
//     console.log('method', req.method) //GET
//     const url = req.url
//     console.log('url: ', url)
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query: ', req.query)
//     res.end(
//         JSON.stringify(req.query)
//     )
// })

//POST
// const server = http.createServer((req,res)=>{
//     if (req.method === 'POST'){
//         //req 数据格式
//         console.log('req content type:', req.headers['content-type'])
//         //接收数据
//         let postData = ''
//         req.on('data', chunk => {
//             postData += chunk.toString()
//         })
//         req.on('end', () => {
//             console.log('postData:', postData)
//             res.end('Hello world')
//         })
//     }
// })
const querystring = require('querystring')
const server = http.createServer((req,res)=>{
    const method = req.method
    console.log('method', req.method) //GET
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //设置返回的格式为JSON格式
    res.setHeader('Content-type', 'application/json')

    //返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }

    if(method==='GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method==='POST'){
        console.log('req content type:', req.headers['content-type'])
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(
                 JSON.stringify(resData)
            )
        })
    }

})

server.listen(8000) 
console.log('OK 8000')