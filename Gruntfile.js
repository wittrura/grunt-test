module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        src: 'src/sass/style.scss',
        dest: 'dist/css/style.css'
      }
    },
    concat: {
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/app.js'
      }

    }
  });

  grunt.registerTask('default', [
    'sass',
    'concat'
  ]);
}
