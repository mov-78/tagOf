module.exports = function ( config ) {
  config.set( {
    sauceLabs : {
      startConnect : false ,
      tunnelIdentifier : process.env.TRAVIS_JOB_NUMBER
    } ,
    captureTimeout : 0 ,
    frameworks : [ 'expect' , 'mocha' ] ,
    files : [ 'lib/tagOf.js' , 'test/**/*.js' ]
  } )
}
