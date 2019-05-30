const client = require('./client')
const ENDPOINT = '/platform/contacts/'

const getByEmail = async (token, email, funnel_name) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.get(`${ENDPOINT}email:${email}/funnels/${funnel_name}`, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
const getByUUID = async (token, uuid, funnel_name) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.get(`${ENDPOINT}${uuid}/funnels/${funnel_name}`, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
const updateFunnelContactByEmail = async (token, email, funnel_name, request) => {
    let config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.put(`${ENDPOINT}email:${email}/funnels/${funnel_name}`, request, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data } : 'Not Internet Found'
    }
}

module.exports = {
    getByEmail,
    getByUUID,
    updateFunnelContactByEmail
}