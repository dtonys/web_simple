
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
        files: {
          // vendors
          'public/build/vendors.min.js': [
            'public/js/vendor/lodash.min.js',
            'public/js/vendor/jquery-2.1.4.min.js'
          ],
          // layout
          'public/build/layout.min.js': [
            'public/js/compiled_templates.js',
            'public/js/layout.js'
          ],
          // pages
          'public/build/page_1.min.js': [
            'public/js/page_1.js'
          ],
          'public/build/page_2.min.js': [
            'public/js/page_2.js'
          ]
        }
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
        files: {
          // layout
          'public/build/layout.min.css': [
            'public/css/normalize.css',
            'public/css/layout.css'
          ],
          // pages
          'public/build/page_1.min.css': [
            'public/css/page_1.css'
          ],
          'public/build/page_2.min.css': [
            'public/css/page_2.css'
          ]
        }
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



