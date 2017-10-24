import axios from 'axios'

const api = axios.create({
	baseURL: "http://localhost:3000/api",
})

export function checkAnnounce(userType) { return null }

export function getMasseuses() { return api.get("/data/masseuses").then(r => r.data) }
