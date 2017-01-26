
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
        options: {
          // Override defaults here 
            //grunt express:dev
        },
        dev: {
          options: {
            script: 'server.js'
          }
        }
    },
      
      //copy all html files from views to dist folder...grunt copy
    copy: {
        main: {
            expand: true,
            src: 'views/*.html',
            dest: 'dist/',
          }
    },
      
      
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
          //banners consit of current date and time
      },
      build: {
        files: {
            //right hand side is destination folder
            //left hand side is source folder eg css/*.css
            //do grunt cssmin
          'dist/css/style.min.css': 'dist/less/*.css'
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
            //converts css file into less
            // grunt less
          "dist/less/style.css": "less/sample.less"
        }
      }
    },
 
      
//      uglify:{
//          options: {
//        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
//          //banners consit of current date and time
//      },
//      build: {
//        files: {
//            //right hand side is destination folder
//            //left hand side is source folder eg css/*.css
//            //do grunt cssmin
//          'dist/js/appName.min.css': ['dist/less/js/app.js', 'dist/less/js/*.js']
//        }
//      }
//      },
      
      
    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    open : {
        dev : {
          path: 'http://localhost:8080/',
          app: 'Google Chrome'
        },
    }
  });
  grunt.registerTask('default', ['less','cssmin','copy','express:dev']);
    
    //if we use delete dist folder just run this code
//     grunt.registerTask('build', ['less','cssmin','copy','express:dev', 'uglify']);
    
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-open');
};
