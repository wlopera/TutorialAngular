module.exports = function(grunt){
	// Project configuration
	grunt.initConfig({
		jshint:{
			all: ['controller.js']
		},
		
		uglify: {
			dist:{
				src: 'controller.js',
				dest: 'build/controller.min.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Default Task
	grunt.registerTask('default',['jshint','uglify']);
	
}