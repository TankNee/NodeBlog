/**
 * @Description: json包装方法
 * @Author: TankNee
 * @Date: 2/2/2020 11:25 AM
 **/
const config = require("../../../config");
const consola = require("consola");
const basicInfo = {
    ...config.server.info,
};
/**
 * 获取成功方法
 * @returns {{msg: string, code: number, data: *}}
 * @param params
 * @param msg
 * @param code
 */
const success = (params, msg = "请求成功", code = 200) => {
    consola.success(msg);
    return {
        ...basicInfo,
        code: code,
        message: msg,
        data: params,
    };
};
/**
 * 获取失败方法
 * @returns {{msg: string, code: number, data: *}}
 * @param params
 * @param msg
 * @param code
 */
const fail = (params, msg = "请求失败", code = 1000) => {
    consola.error(msg);
    return {
        ...basicInfo,
        code: code,
        message: msg,
        data: params,
    };
};
module.exports = {
    success: success,
    fail: fail,
};
