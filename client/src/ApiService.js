const BASE_URL = "http://localhost:3005"

function fetchRequest (url, input) {
  return fetch(`${BASE_URL}${url}`, input)
  .then(res => res.status <=400? res : Promise.reject(res))
  .then(res => res.status !== 204? res.json(): res)
  .catch(err => {console.log(err.message)})
}

function getProfs() {
  return fetchRequest('/user');
}

function register(body) {
  return fetchRequest('/register', {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

function login(body) {
  return fetchRequest('/login', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

function profile() {
  return fetchRequest('/me', {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
}

function logout() {
  return fetchRequest('/logout', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
}

function getUserById(_id) {
  return fetchRequest(`/${_id}`)
}

const ApiService = {
  getProfs, register, login, profile, logout, getUserById
};

export default ApiService;