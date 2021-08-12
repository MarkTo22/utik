/**
 * 格式化模块：单位、数字、文件大小...
 */

import { isNum } from './comm.js';

/**
 * @description 格式化文件大小
 * @param { Number } value 
 * @returns 格式化后的人性化文件大小：如输入 10000，输出 "9.77KB"
 */
export const fileSizeFMT = (value) => {
    if( !value ) return "0 Bytes";
    let units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let index = 0;
    let num = Number.parseFloat(value);
    if( Number.isNaN( num ) ) {
        return value;
    }
    index = Math.floor(Math.log(num) / Math.log(1024));
    if( index > 8 ) {
        index = 8;
    }
    let filesize = num / Math.pow(1024, index);
    filesize = filesize.toFixed(2);
    return filesize+units[index];
}

/**
 * @description 货币数值格式化（以千位为单位，用“,”分割）
 * @param {Number | String} num 
 * @returns in[1234] out["123,4"]
 */
export const toThousands = (num) => {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

/**
 * @description 数值百分比格式化，默认保留小数点后2位
 *              注：toFixed 采取“四舍六入五取偶法”
 * @param {Number | String} num 
 * @returns in[0.1] out["10%"]
 */
export const toPercent = (num) => {
    if( !isNum(num) ) {
        return;
    }
    return (num * 100).toFixed(2)+"%"
}

export default {
    fileSizeFMT,
    toThousands,
    toPercent
}