import axios from 'axios'

export const login = (username, password) => {
    var headers = {
        'Content-Type': 'application/json'
    }
    var data = JSON.stringify({
        username: username,
        password: password
    })
    return axios.post('http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/auth/', data, { headers: headers} )
    .then(res => res.data.token)
}