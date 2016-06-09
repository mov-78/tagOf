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
```
