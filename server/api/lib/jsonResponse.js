/**
 * @Description: json包装方法
 * @Author: TankNee
 * @Date: 2/2/2020 11:25 AM
 **/
const config = require("../../../config");
const basicInfo = {
    ...config.server,
};
/**
 * 获取成功方法
 * @param code 返回代码
 * @param params 返回参数
 * @param msg 返回携带的信息
 * @returns {{msg: string, code: number, data: *}}
 */
const success = (params, msg = "请求成功", code = 200) => {
    return {
        ...basicInfo,
        code: code,
        data: {
            ...params,
            message: msg,
        },
    };
};
/**
 * 获取失败方法
 * @param code 返回代码
 * @param params 返回参数
 * @param msg 返回携带的信息
 * @returns {{msg: string, code: number, data: *}}
 */
const fail = (params, msg = "请求失败", code = 1000) => {
    return {
        ...basicInfo,
        code: code,
        data: {
            ...params,
            message: msg,
        },
    };
};
module.exports = {
    success: success,
    fail: fail,
};
