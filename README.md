# tagOf.js ![version](https://img.shields.io/npm/v/tagOf.svg?style=flat-square) ![build status](https://img.shields.io/travis/pwnn/tagOf.svg?style=flat-square) ![downloads](https://img.shields.io/npm/dt/tagOf.svg?style=flat-square)

![build status](https://saucelabs.com/browser-matrix/pwn-tagof.svg)

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

Browser:

```html
<script src="path/to/tagOf.min.js"></script>
```
