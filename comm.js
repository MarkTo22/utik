/**
 * 常用方法
 */

/**
 * @description 支持验证<数字型>和<字符串型>数值
 * @param {Number | String} value 
 * @returns {Boolean}
 */
export const isNum = (value) => {
    value += "";
	return value.trim()?!isNaN(Number(value)) : false;
}

/**
 * @description base64编码
 * @param {String} str 
 * @returns 
 */
export const enBase64 = (str) => {
	return window.btoa(encodeURIComponent(str||''));
}

/**
 * @description base64解码
 * @param {String}  code 
 * @returns 
 */
 export const deBase64 = (code) => {
	return decodeURIComponent(window.atob(code));
}

export default {
    enBase64,
    deBase64
}