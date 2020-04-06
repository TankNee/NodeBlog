import * as _axios from "axios";
import _config from "~/config";
import consola from "consola";
let options = {};
options.baseURL = `http${_config.server.ssl ? "s" : ""}://${
    _config.server.host
}:${_config.server.port}/${_config.server.info.apiVersion}/api`;
const axios = _axios.create(options);
// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        consola.info(`Making request to ${config.url}`);
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        if (response.data.code > 200) {
            consola.error(
                `Get response error, the response code is ${response.data.code} and the message is ${response.data.message}`
            );
        } else {
            consola.success(`Get response code: ${response.data.code}`);
        }

        return response.data.data;
    },
    function (error) {
        consola.error(
            `Get response error, the response code is ${error.data.code} and the message is ${response.data.message}`
        );
        return Promise.reject(error);
    }
);
export default axios;
