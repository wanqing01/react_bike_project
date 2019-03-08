import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, res) {
                if (res.status === 'success') {
                    resolve(res.data);
                } else {
                    reject(res.message);
                }

            })
        })
    }

    static ajax(options) {
        const baseURL = 'https://www.easy-mock.com/mock/5c7e7aabd811a611ca8c9275/bikeapi';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseURL,
                timeout: 5000,
                params: (options.data && options.data.params) || ''

           }).then((response)=>{
               if(response.status === 200){
                   let res = response.data;
                   if(res.code === 0){
                    resolve(res);
                   }else{
                       Modal.info({
                           title: '提示',
                           content: res.msg
                       })
                   }
               }else{
                   reject(response.data);
               }
           })
        })
    }
}