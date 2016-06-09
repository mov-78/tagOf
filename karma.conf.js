module.exports = function ( config ) {
  config.set( {
    frameworks : [ 'expect' , 'mocha' ] ,
    files : [ 'lib/tagOf.js' , 'test/**/*.js' ]
  } )
}
