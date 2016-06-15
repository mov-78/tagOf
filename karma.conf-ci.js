module.exports = function ( config ) {

  var customLaunchers = {
    SL_CHROME : {
      base : 'SauceLabs' ,
      browserName : 'chrome'
    } ,
    SL_FIREFOX : {
      base : 'SauceLabs' ,
      browserName : 'firefox'
    } ,
    SL_IE_6 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '6'
    } ,
    SL_IE_7 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '7'
    } ,
    SL_IE_8 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '8'
    } ,
    SL_IE_9 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '9'
    } ,
    SL_IE_10 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '10'
    } ,
    SL_IE_11 : {
      base : 'SauceLabs' ,
      browserName : 'internet explorer' ,
      version : '11'
    } ,
    SL_IOS_SAFARI_7 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      version : '7.0'
    } ,
    SL_IOS_SAFARI_8 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      version : '8.0'
    } ,
    SL_IOS_SAFARI_9 : {
      base : 'SauceLabs' ,
      browserName : 'iphone' ,
      version : '9.0'
    } ,
    SL_IOS_SAFARI_LATEST : {
      base : 'SauceLabs' ,
      browserName : 'iphone'
    } ,
    SL_ANDROID_4_0 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '4.0'
    } ,
    SL_ANDROID_4_1 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '4.1'
    } ,
    SL_ANDROID_4_2 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '4.2'
    } ,
    SL_ANDROID_4_3 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '4.3'
    } ,
    SL_ANDROID_4_4 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '4.4'
    } ,
    SL_ANDROID_5_0 : {
      base : 'SauceLabs' ,
      browserName : 'android' ,
      version : '5.0'
    } ,
    SL_ANDROID_LATEST : {
      base : 'SauceLabs' ,
      browserName : 'android'
    }
  }

  config.set( {
    frameworks : [ 'expect' , 'mocha' ] ,
    files : [ './lib/**/*.js' , './test/**/*.js' ] ,
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
