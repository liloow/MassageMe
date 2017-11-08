import axios from 'axios'


const api = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api",
})


export function storeStripeToken(token) { return api.post("/secure").then(r => r.data) }
