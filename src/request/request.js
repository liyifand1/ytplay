import axios from 'axios'
const getArtists = (id) => {
    return axios.get('/artists', {
        params: {
            id
        }
    })
}
const getAlbum = (id) => {
    return axios.get('/album', {
        params: {
            id
        }
    })
}

export { getArtists, getAlbum }