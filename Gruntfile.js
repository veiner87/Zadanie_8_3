module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	jshint: {
      all: ['js/*.js']
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass']);
};