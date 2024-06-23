export function setToken(token: string) {
    localStorage.setItem('jwtToken', token);
    console.log(token);
}

export function removeToken() {
    localStorage.removeItem('jwtToken');
}

export function getToken(): string {
    const token = localStorage.getItem('jwtToken');
    return token ?? '';
}