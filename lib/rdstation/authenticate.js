const client = require('./client')
const ENDPOINT = '/auth/token'

const getToken = async (client_id, client_secret, code) => {
    let config = { headers: { 'Content-Type': 'application/json' } }
    try {
        let response = await client.post(ENDPOINT, { client_id, client_secret, code }, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
const refreshToken = async (client_id, client_secret, refresh_token) => {
    let config = { headers: { 'Content-Type': 'application/json' } }
    try {
        let response = await client.post(ENDPOINT, { client_id, client_secret, refresh_token }, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
const revokeToken = async (token, refresh_token) => {
    let config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` } }
    try {
        let response = await client.post(ENDPOINT, { token: refresh_token, token_type_hint: "refresh_token" }, config)
        return { status: response.status, data: response.data }
    } catch (e) {
        return e.response ? { status: e.response.status, error: e.response.data.errors[0] } : 'Not Internet Found'
    }
}
module.exports = { getToken, refreshToken, revokeToken }
