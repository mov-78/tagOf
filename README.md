# tagOf.js

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
tagOf( new EvalError() ) // 'error'
tagOf( new RangeError() ) // 'error'
tagOf( new ReferenceError() ) // 'error'
tagOf( new SyntaxError() ) // 'error'
tagOf( new TypeError() ) // 'error'
tagOf( new URIError() ) // 'error'
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
