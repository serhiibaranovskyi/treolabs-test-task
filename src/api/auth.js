export function login(userName, password) {
	return window.fetch('http://demo3059766.mockable.io/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userName, password }),
	})
}

export default {
	login,
}
