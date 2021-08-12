# What is this?

a common utils, that i think you maybe need it.

# Installation

`npm install utik --save`

# Usage

```javascript
import utik, { format, reg } from 'utik';

const isEmail = utik.email.test('10000@1.io');
const isQQ = reg.qq.test('12345678');
const fileSize = format.fileSizeFMT('10000');

console.log('isEmail', isEmail);
console.log('isQQ', isQQ);
console.log('fileSize', fileSize);

```

# Docs

### 1.正则列表（reg）

````js
// todo
import { reg } from 'utik';
reg.qq.test("123456")

// todo
import utik from 'utik';
utik.email.test("123@gmail.com");
````

| 关键字        | 说明                                                         | 版本     |
| ------------- | ------------------------------------------------------------ | -------- |
| `specialWord` | 匹配特殊字符                                                 | `v1.0.0` |
| `phone`       | 校验手机号码                                                 | `v1.0.0` |
| `tel`         | 校验国内电话号码                                             | `v1.0.0` |
| `telPhone`    | 校验电话号码（包括手机号）                                   | `v1.0.0` |
| `zn`          | 匹配中文字符                                                 | `v1.0.0` |
| `idcard`      | 校验身份证号码                                               | `v1.0.0` |
| `idcard_1`    | 校验身份证号码（弱校验）                                     | `v1.0.0` |
| `account`     | 校验账号（字母开头，长度5-16之间，允许字母数字下划线）       | `v1.0.0` |
| `password`    | 校验密码（必须包含大小写字母和数字的组合，不能使用特殊字符，长度8-10之间） | `v1.0.0` |
| `password_1`  | 校验密码（字母开头，长度6-18之间，只能包含字母、数字和下划线） | `v1.0.0` |
| `qq`          | 校验QQ                                                       | `v1.0.0` |
| `email`       | 校验邮箱号                                                   | `v1.0.0` |

### 2.格式化列表（format）

```js
// todo
import { format } from 'utik';
format.fileSizeFMT('10000'); //"9.77KB"

// todo
import utik from 'utik';
utik.fileSizeFMT('10000'); //"9.77KB"
```



| 关键字        | 说明                       | 版本     |
| ------------- | -------------------------- | -------- |
| `fileSizeFMT` | 格式化文件大小，基数为1024 | `v1.0.0` |
| `toThousands` | 货币数值格式化，基数为1000 | `v1.0.1` |
| `toPercent` | 百分比格式化，基数为1 | `v1.0.1` |

### 3.常用API列表

| 关键字     | 说明         | 版本     |
| ---------- | ------------ | -------- |
| `enBase64` | base64编码 | `v1.0.1` |
| `deBase64` | base64解码 | `v1.0.1` |

### 4.节流防抖列表

```js
// todo
import utik from 'utik';

const fn = (num) => {
    console.log('fn...', num);
}
const debounceFn = utik.debounce(fn, 500);
const throttleFn = utik.throttle(fn, 500);

setInterval(()=>{
    debounceFn(1);
    debounceFn(2);
    debounceFn(3);
}, 600) //3、3、3...

// setInterval(()=>{
//     throttleFn(1);
//     throttleFn(2);
//     throttleFn(3);
// }, 100) //1、1、1...
```



| 关键字     | 说明         | 版本     |
| ---------- | ------------ | -------- |
| `throttle` | 简单节流实现 | `v1.0.1` |
| `debounce` | 简单防抖实现 | `v1.0.1` |
