import axios from 'axios'

export const apiGetUser = (token) => {
    console.log('Tokennya: ', token)
    let headers = {
        'Authorization': token
    }
    return axios.get('http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/users/', { headers: headers })
    .then(function(res){
        return res.data.results
    })
}