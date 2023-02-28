export class UserService {

    // async handleResponse(url, options) {
    //     try {
    //         const res = await fetch(url, options)
    //         if (!res.ok) {
    //             throw new Error(`Запрос выполнен не верно, ${res.status}`)
    //         }

    //         return await res.json()

    //     } catch (error) {
    //         console.error(error)
    //         throw error
    //     }
    // }


    // async getData(url, params) {

    //     const urlParams = new URLSearchParams(params)
    //     const requestUrl = `${url}?${urlParams.toString()}`
    //     const options = {
    //         method: 'GET'
    //     }

    //     return await handleResponse(requestUrl, options)
    // }

    // async sendData(url, data) {
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     }

    //     return await handleResponse(url, options);
    // }




    constructor() {
        this.url = 'http://localhost:4545'
    }



    async getUsers() {
        const res = await fetch(`${this.url}/users`)
        return await res.json()
    }

    async addUser(user) {
        const res = await fetch('http://localhost:4545/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        return await res.json()
    }

    async removeUser(id) {
        const res = await fetch(`http://localhost:4545/users/${id}`, {
            method: 'DELETE'
        })
        return await res.json()
    }

    async changePermissionsUser(id, data) {
        const res = await fetch(`http://localhost:4545/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    async getUser(id) {
        const res = await fetch(`http://localhost:4545/users/${id}`)
        return await res.json()
    }

    async editUser(id, user) {
        const res = await fetch(`http://localhost:4545/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        return res.json()
    }


    async filterUser(filterOption) {
        const res = await fetch(`http://localhost:4545/users?${filterOption}=true`)
        return await res.json()
    }


    async getSortUser(sortOption) {
        const res = await fetch(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`)
        return res.json()
    }

    async getSearchUser(inputValue) {
        const res = await fetch(`http://localhost:4545/users?q=${inputValue}`)
        return res.json()
    }





} 