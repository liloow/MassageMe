import axios from 'axios'

const api = axios.create({
	baseURL: "http://localhost:3000/api",
})

export function checkAnnounce(userType) { return null }

export function getMasseuses() { return api.get("/data/masseuses").then(r => r.data) }

export function getSlots() { return api.get("/data/slots").then(r => r.data) }

export function processPayment(res) { return api.patch('/data/payment', { res }).then(r => r.data) }

export function getMassages() { return api.get("/data/massages").then(r => r.data) }

export function getMassage(id) { return api.get(`/data/massage/${id}`).then(r => r.data) }

export function getMasseuse(id) { return api.get(`/data/masseuse/${id}`).then(r => r.data) }
