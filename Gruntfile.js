module.exports = function ( grunt ) {

  require( 'load-grunt-tasks' )( grunt )

  grunt.initConfig( {
    uglify : {
      tagOf : {
        options : {
          report : 'gzip' ,
          sourceMap : true ,
          sourceMapName : 'dist/tagOf.min.map'
        } ,
        files : {
          'dist/tagOf.min.js' : 'lib/tagOf.js'
        }
      }
    }
  } )

}
