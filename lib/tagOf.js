//
// tagOf.js
// typeof alternative
// Pwn <hi@pwn.buzz>
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

  return function tagOf( value ) {
    var rawTag = toString.call( value )
    if ( value === null ) {
      return 'null'
    } else {
      return rawTag.substring( 8 , rawTag.length - 1 ).toLowerCase()
    }
  }

} )
