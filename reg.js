
/**
 * 正则匹配模块，reg[_x]
 *  x: 
 *      1,2,3：强度依次递减。
 */

// 匹配特殊字符（除数字和字母以外的）
export const specialWord = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！￥…（）——\-+={}|《》？：“”【】、；‘'，。、]/im

// 手机号码
export const phone = /^1[3-9]\d{9}$/

// 国内电话号码
export const tel = /\d{3}-\d{8}|\d{4}-\d{7}/

// 电话号码（包括手机）
export const telPhone = /^(1[3-9]\d{9}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/

// 中文
export const zn = /^[\u4e00-\u9fa5]+$/

// 身份证
export const idcard = /(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}$)/

// 身份证（弱校验）
export const idcard_1 = /(^\d{18}$)|(^\d{17}(\d|X|x)$|(^\d{15}$))/

// 合法账号（字母开头，长度5-16之间，允许字母数字下划线）
export const account = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/

// 密码（必须包含大小写字母和数字的组合，不能使用特殊字符，长度8-10之间）
export const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/

// 密码（字母开头，长度6-18之间，只能包含字母、数字和下划线）
export const password_1 =  /^[a-zA-Z]\w{5,17}$/

// qq（目前匹配5-12位）
export const qq = /[1-9][0-9]{4,11}/

// 邮箱
export const email = /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

export default {
    specialWord,phone,tel,telPhone,zn,
    idcard,idcard_1,account,password,password_1,
    qq,email
}






