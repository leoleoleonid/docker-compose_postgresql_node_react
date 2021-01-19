const BASE_URL = 'http://localhost:8080/api';

export const getTree = () => {
    return fetch(`${BASE_URL}/regions`).then(
        (response) => {
            return response.json()
        }
    )
};

export const getTreeById = (id: number) => {
    return fetch(`${BASE_URL}/regions?id=${id}`).then(
        (response) => {
            return response.json()
        }
    )
};

export const getTreeLevel = (path:  string | undefined) => {
    path = path || '';
    return fetch(`${BASE_URL}/regions/branch?path=${path}`).then(
        (response) => {
            return response.json()
        }
    )
};

const apis = {
    getTree,
    getTreeById,
    getTreeLevel
};

export default apis;