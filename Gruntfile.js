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
    uglify: {
      build: {
        src: config.jsSrcDir + '*.js',
        dest: config.jsMinDir + 'production.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/build'
        }]
      }
    },
    responsive_images: {
      dev: {
        files: [{
          expand: true,
          src: ['images/*.{png,jpg,gif}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
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
    'uglify',
    'imagemin',
    'responsive_images',
    'watch'
  ]);
};
