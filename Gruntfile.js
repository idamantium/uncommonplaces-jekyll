module.exports = function(grunt) {


  require( 'load-grunt-tasks' )( grunt );

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app.css' : 'app.scss'
        }
      }
    },


    shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },


    watch : {
            files : [ '_layouts/*.html',
                      '_posts/*.markdown',
                      'css/*.css',
                      'css/libs/*.css',
                      '_config.yml',
                      'index.html',
                      '404.html' ],
            tasks : [ 'concat',
                      'cssmin',
                      'shell:jekyllServe' ],
            options : {
                spawn : false,
                interrupt : true,
                atBegin : true,
                livereload : true
            }
        }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('test', ['shell:jekyllServe']);
  grunt.registerTask('deploy', ['shell:jekyllBuild']);

};