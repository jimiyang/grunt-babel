module.exports = function(grunt) { 
	require("load-grunt-tasks")(grunt); 
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),      
        babel:{
            options:{
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist:{
				files: [{
					expand: true,//相对路径
					cwd: 'js/',
					src: ['*.js'],
					dest: 'dist/'
				}]
			}
        },
		uglify: {	
			options: {
				mangle: {
					except: ['jquery','md5','require','exports','module']
				},	
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %>*/'
			},	
			my_target: {
				files: [{
					expand: true,//相对路径
					cwd: 'dist/',
					src: ['*.js'],
					dest:'dist/js/'
				}]
			}
		}
    });  

  grunt.loadNpmTasks('grunt-babel');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  //注册任务  
  grunt.registerTask('default', ['babel','uglify']);
  //grunt.registerTask('watcher',['watch']);
}  