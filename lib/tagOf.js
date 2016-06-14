//
//     tagOf.js
//     typeof alternative
//     Pwn <hi@pwn.buzz>
//

( function ( root , factory ) {

  if ( typeof define === 'function' && define.amd ) {
    define( factory )
  } else if ( typeof module === 'object' && module.exports ) {
    module.exports = factory()
  } else {
    root.tagOf = factory()
  }

} )( this , function factory() {

  var toString = Object.prototype.toString
  var toSource = Function.prototype.toString

  var reTag = /(\w+)\]$/
  var reSource = /function\s(\w*)/

  return function tagOf( value ) {

    var tagFromClass
    var tagFromSource

    if ( value === null ) {
      return 'null'
    }

    tagFromClass = toString.call( value ).match( reTag )[ 1 ]

    if ( value === void 0 || typeof value.constructor !== 'function' ) {
      return tagFromClass.toLowerCase()
    } else {
      tagFromSource = toSource.call( value.constructor ).match( reSource )[ 1 ]
      return ( tagFromSource || tagFromClass ).toLowerCase()
    }

  }

} )
