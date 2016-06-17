//
//     tagOf.js@v1.0.1
//     typeof alternative
//     Pwn <hi@pwn.buzz>
//

!function ( root , factory ) {

  if ( typeof define === 'function' && define.amd ) {
    define( factory )
  } else if ( typeof module === 'object' && module.exports ) {
    module.exports = factory()
  } else {
    root.tagOf = factory()
  }

}( this , function factory() {

  var reSource = /(?:function|class)\s*(\w*)/

  var toString = Object.prototype.toString
  var toSource = Function.prototype.toString

  return function tagOf( value ) {

    var tagFromClass
    var tagFromSource

    if ( value === null ) {
      return 'null'
    } else if ( value === void 0 ) {
      return 'undefined'
    }

    tagFromClass = toString.call( value )
    tagFromClass = tagFromClass.substring( 8 , tagFromClass.length - 1 )

    if ( typeof value.constructor !== 'function' ) {
      return tagFromClass.toLowerCase()
    } else {
      tagFromSource = toSource.call( value.constructor ).match( reSource )[ 1 ]
      return ( tagFromSource || tagFromClass ).toLowerCase()
    }

  }

} )
