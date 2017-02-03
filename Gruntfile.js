module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  let config = grunt.file.readYAML('Gruntconfig.yml');

    grunt.initConfig({
    sass: {
      dist: {
        src: config.scssSrcDir + 'style.scss',
        dest: config.cssDir + 'style.css'
      }
    },
    concat: {
      dist: {
        src: config.jsSrcDir + '*.js',
        dest: config.jsConcatDir + 'app.js'
      }

    }
  });

  grunt.registerTask('default', [
    'sass',
    'concat'
  ]);
}
