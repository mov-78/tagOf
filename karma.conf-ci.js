var fs = require( 'fs' )
var yaml = require( 'js-yaml' )

module.exports = function ( config ) {

  var list = fs.readFileSync( './.saucelabs.yml' )
  var customLaunchers = yaml.safeLoad( list )

  config.set( {
    frameworks : [ 'jasmine' ] ,
    files : [ './lib/tagOf.js' , './test/*.js' ] ,
    singleRun : true ,
    captureTimeout : 0 ,
    customLaunchers : customLaunchers ,
    browsers : Object.keys( customLaunchers ) ,
    reporters : [ 'dots' , 'saucelabs' ] ,
    sauceLabs : {
      startConnect : false ,
      tunnelIdentifier : process.env.TRAVIS_JOB_NUMBER
    }
  } )

}
