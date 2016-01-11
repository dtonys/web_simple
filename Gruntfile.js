var assets = require('./app/assets.js').grunt_assets();

module.exports = function(grunt) {

  grunt.initConfig({

    jsvalidate: {
      options:{
        globals: {},
        esprimaOptions: {},
        verbose: true
      },
      targetName:{
        files:{
          src:[
            'public/js/**/*.js'
          ]
        }
      }
    },

    // uglify
    uglify: {
      my_target: {
        files: assets.js_map
      }
    },

    // livereload css
    watch: {
      jst: {
        files: ['public/templates/**/*.tmpl.html'],
        tasks: ['jst']
      },
      css: {
        files: 'public/css/**/*.css',
        options: {
          livereload: true,
        }
      },
    },

    // minify css
    cssmin: {
      combine: {
        files: assets.css_map
      }
    },

    //generate templates
    jst: {
      compile: {
        options: {
          prettify: true,
          namespace: 'templates',
          //strip whitespace
          processContent: function (src) {
            return src.replace(/(^\s+|\s+$)/gm, '');
          },
          //remove path and .tmpl.html from filename to be used as key
          processName: function (filename) {
            return filename.replace('public/templates/', '').replace('.tmpl.html', '');
          }
        },
          //feelGood templates
        files: {
          "public/js/compiled_templates.js": ["public/templates/**/*.tmpl.html"]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default', [ 'jsvalidate', 'jst', 'uglify', 'cssmin' ]);
};



