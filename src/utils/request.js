import axios from "axios";

const instance = axios.create({
    timeout: 20000,
})

instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        instance({
                method: "post",
                url,
                data
            })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}