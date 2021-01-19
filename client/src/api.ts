export const load = () => {
    return fetch(`/api/regions`).then(
        (response) => {
            return response.json()
        }
    )
};
