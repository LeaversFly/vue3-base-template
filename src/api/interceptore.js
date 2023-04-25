import axios from "axios";

//这里的VITE_BASE_API和VITE_TIMEOUT是vite自定义的环境变量，下文会提到
axios.defaults.baseURL = import.meta.env.VITE_BASE_API
axios.defaults.timeout = import.meta.env.VITE_TIMEOUT

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const { code, data, message } = response.data
        switch (code) {
            case 20000:
                return data
            default:
                return Promise.reject(message)
        }
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default axios