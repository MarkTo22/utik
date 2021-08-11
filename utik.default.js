
import reg from './reg.js'
import format from './format.js'
import { default as debounce } from './debounce.js'
import { default as throttle } from './throttle.js'

const utik = {}

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

utik.fileSizeFMT = format.fileSizeFMT;
utik.debounce = debounce;
utik.throttle = throttle;


export default utik;

