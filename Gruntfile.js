module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = grunt.file.readYAML('Gruntconfig.yml');

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
    },
    jshint: {
      options: {
        "eqeqeq": true
      },
      all: [
        'Gruntfile.js',
        config.jsSrcDir + "*.js"
      ]
    },
    watch: {
      sass: {
        files: config.scssSrcDir + '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'sass',
    'concat',
    'watch'
  ]);
};
