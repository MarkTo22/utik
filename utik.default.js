
import reg from './reg.js'
import format from './format.js'
import comm from './comm.js'
import { default as debounce } from './debounce.js'
import { default as throttle } from './throttle.js'

const utik = {}

// 正则
utik.specialWord = reg.specialWord;
utik.phone = reg.phone;
utik.tel = reg.tel;
utik.telPhone = reg.telPhone;
utik.zn = reg.zn;
utik.idcard = reg.idcard;
utik.idcard_1 = reg.idcard_1;
utik.account = reg.account;
utik.password = reg.password;
utik.password_1 = reg.password_1;
utik.qq = reg.qq;
utik.email = reg.email;

// 常用
utik.enBase64 = comm.enBase64;
utik.deBase64 = comm.deBase64;

// 格式化
utik.fileSizeFMT = format.fileSizeFMT;
utik.toThousands = format.toThousands;
utik.toPercent = format.toPercent;

utik.debounce = debounce;
utik.throttle = throttle;

export default utik;

