module.exports = function ( config ) {
  config.set( {
    frameworks : [ 'jasmine' ] ,
    files : [ './lib/tagOf.js' , './test/*.js' ]
  } )
}
