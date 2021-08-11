/**
 * 格式化：单位、数字、文件大小...
 */

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

export default {
    fileSizeFMT
}