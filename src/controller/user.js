const loginCheck = (username, password) => {
    if (username === 'May' && password === '123') {
        return true
    } 
    return false
}
module.exports = {loginCheck}