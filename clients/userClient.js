const MotiServiceUrl = 'http://localhost:19516/user/';
const MotiServiceUrlProd = 'https://motiservice.azurewebsites.net/user/'

export const createUser = async (user) => {
    var res = await fetch(
        MotiServiceUrl,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        });
    return res;
}

export const updateUser = async(user) => {
    var res = await fetch(
        MotiServiceUrl,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(user)
        });
    return res;
}