import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


const api = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api",
})

export function checkAnnounce(userType) { return null }

export function getMasseuses() { return api.get("/data/masseuses").then(r => r.data) }

export function getSlots() { return api.get("/data/slots").then(r => r.data) }

export function processPayment(res) { return api.patch('/data/payment', { res }).then(r => r.data) } // TODO : FIX MASSEUSE "SPLICE"

export function getMassages() { return api.get("/data/massages").then(r => r.data) }

export function getMassage(id) { return api.get(`/data/massage/${id}`).then(r => r.data) }

export function getMasseuse(id) { return api.get(`/data/masseuse/${id}`).then(r => r.data) }

export function getCities() { return api.get(`/data/cities`).then(r => r.data) }
