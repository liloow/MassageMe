import axios from 'axios'

const api = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api",
})

function errHandler(err) {
	console.error('API', err);
}

export function signup(userInfo) { return api.post('/signup', userInfo).then(response => { return response.data; }) }


export function login(username, password, vm) {
	return api.post('/login', { username, password })
		.then(response => {
			saveUserInfo(response.data);
			vm.user = response.data.user;
			return response.data;
		});
}

function saveUserInfo({ token, user }) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	localStorage.setItem('token', token);
	localStorage.setItem('user', JSON.stringify(user));
}

export function logout(vm) {
	localStorage.removeItem('token');
	localStorage.removeItem('user')
	vm.user = null;
	delete axios.defaults.headers.common['Authorization'];
}

export function checkUser(vm) {
	const token = localStorage.getItem('token');
	const userInfo = localStorage.getItem('user');
	if (token && userInfo) {
		const user = JSON.parse(userInfo);
		saveUserInfo({
			token,
			user,
		});
		vm.user = user;
	} else {
		vm.user = {

		}
	}
}
