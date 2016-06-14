# tagOf.js

![build status](https://img.shields.io/travis/pwnn/tagOf.svg?style=flat-square)
![downloads](https://img.shields.io/npm/dt/tagOf.svg?style=flat-square)

typeof alternative

```js
// tagOf( value:any ): string

tagOf( null ) // 'null'
tagOf( undefined ) // 'undefined'
tagOf( 0 ) // 'number'
tagOf( new Number( 0 ) ) // 'number'
tagOf( '' ) // 'string'
tagOf( new String( '' ) ) // 'string'
tagOf( true ) // 'boolean'
tagOf( false ) // 'boolean'
tagOf( new Boolean( true ) ) // 'boolean'
tagOf( new Boolean( false ) ) // 'boolean'
tagOf( {} ) // 'object'
tagOf( [] ) // 'array'
tagOf( function () {} ) // 'function'
tagOf( new Date() ) // 'date'
tagOf( new Error() ) // 'error'
tagOf( new EvalError() ) // 'evalerror'
tagOf( new RangeError() ) // 'rangeerror'
tagOf( new ReferenceError() ) // 'referenceerror'
tagOf( new SyntaxError() ) // 'syntaxerror'
tagOf( new TypeError() ) // 'typeerror'
tagOf( new URIError() ) // 'urierror'
tagOf( /^/i ) // 'regexp'
tagOf( new RegExp() ) // 'regexp'

tagOf( Symbol( 'tagOf') ) // 'symbol'
tagOf( Symbol.for( 'tagOf' ) ) // 'symbol'
tagOf( new Set() ) // 'set'
tagOf( new WeakSet() ) // 'weakset'
tagOf( new Map() ) // 'map'
tagOf( new WeakMap() ) // 'weakmap'
```

## Install

Node:

```sh
$ npm install --save tagOf
```

```js
const tagOf = require( 'tagOf' )
```

Browser(works in all browsers, including IE7):

> [tagOf.min.js(233B gzipped)](https://raw.githubusercontent.com/pwnn/tagOf/master/dist/tagOf.min.js)

```html
<script src="path/to/tagOf.min.js"></script>
```
