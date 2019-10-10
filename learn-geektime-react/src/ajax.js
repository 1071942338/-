import axios from "axios";
import domain from "./domain";

//创建请求实例
const request = axios.create({
    baseURL:domain.baseUrl,
    timeout:10000,
    headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
});
//创建get方法
function get(url,data) {
    return request.get(url,{
        params:data,
    })
}

//创建post方法
function post(url,data) {
    return request.post(url,data);
}

//请求banner列表
export  function getBannerList(){
    return new Promise(((resolve, reject) => {
        get("bannerList")
            .then(function (response) {
                if(response.status === 200){
                    resolve(response.data.data);
                }else {
                    reject("数据解析失败");
                }
            })
            .catch(function (error) {
                reject(error);
            });
    }));
}