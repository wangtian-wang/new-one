export function doLogin (username) {
    return axios({
        method: 'post',
        data: username,
        url:'/login'
    })
}
export function doValidate (username) {
    return axios({
        method: 'post',
        data: username,
        url:'/validate'
    })
}