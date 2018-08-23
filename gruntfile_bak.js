module.exports = function(grunt) {  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),      
        jshint:{
            build:['js/*.js'],
            options:{
                jshintrc:'.jshintrc' //检测JS代码错误要根据此文件的设置规范进行检测，可以自己修改规则
            }
        }, 
        copy: {
          main: {
            expand: true,
            cwd: 'js/',
            src: '**',
            dest: 'dist/',
          },
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-es2015']
                
            },
            dist: {
                files: [{
                   expand:true,
                   cwd:'dist/', 
                   src:['**/t.js'],
                   dest:'dest/'
                 }] 
            }
        },
		watch: {
           /*js: {
            files:['js/*.js'],
            tasks:['default'],
            options: {livereload:false}
          },*/
          babel:{
              files:'js/*.js',
              tasks:['babel']
          }
        },
        uglify: {  
            options: {
             mangle: true, //混淆变量名
             comments: 'true'
            },  
            my_target: {
                 files: [{
                   expand:true,
                   cwd:'js/', //js目录下
                   src:['js/*.js'], //所有js文件
                   dest:'dist/*'  //输出到此目录下
                 }] 
            } 
        }
    });  
      
  //载入uglify插件，压缩js 
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-babel');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  //注册任务  
  grunt.registerTask('default', ['copy','babel','uglify']);
  grunt.registerTask('watcher',['watch']);
}  