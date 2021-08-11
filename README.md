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

