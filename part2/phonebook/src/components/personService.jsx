import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const res = axios.get(baseUrl)
    return res.then(response => response.data)
}

const create = newObject => {
    const res = axios.post(baseUrl, newObject)
    return res.then(response => response.data)
}

const update = (id, newObject) => {
    const res = axios.put(`${baseUrl}/${id}`, newObject)
    return res.then(response => response.data)
}

const deleteCall = (id) => {
    const res = axios.delete(`${baseUrl}/${id}`)
    return res.then(response => response.data)
}

const service = { getAll, create, update, deleteCall }
export default service