import { Http } from '../src/api/interceptor'

const apis = [
    //url，请求方式，参数，callback
    ['/file/findAll', 'GET', null, null],
    ['/file/1', 'GET', null, null],
    ['/user/token', 'GET', null, (data) => {
        localStorage.setItem('token', data)
    }]
]

export function useGetData() {
    return apis.map(item => {
        const body = item[1] === 'GET' ? null : item[2]
        return {
            id: item[0],
            method: async () => {
                const { data } = await Http.staticFetch(item[0], {
                    method: item[1],
                    body
                })
                typeof item[3] === 'function' ? item[3](data) : null
                console.log(data);
            }
        }
    })
}