const client = require('./client')
const ENDPOINT = '/platform/contacts/'

const getByEmail = async (token, email) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.get(`${ENDPOINT}email:${email}`, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
const getByUUID = async (token, uuid) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.get(`${ENDPOINT}${uuid}`, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}

const updateContactByIdentifier = async (token, identifier, value, request) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.patch(`${ENDPOINT}${identifier}:${value}`, request, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data } : 'Not Internet Found'
    }
}

const updateContactByUUID = async (token, uuid, request) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.patch(`${ENDPOINT}${uuid}`, request, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data } : 'Not Internet Found'
    }
}
module.exports = {
    getByEmail,
    getByUUID,
    updateContactByIdentifier,
    updateContactByUUID
}