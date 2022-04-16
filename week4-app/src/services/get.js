import {domainPath} from './config'

const GetApi = (path) => {
    const promise = new Promise((resolve, reject)=>{
        fetch(`${domainPath}/${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err)=> {
                reject(err);
            })
    })
    return promise;
}

export default GetApi;