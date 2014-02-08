'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'lib/*.js',
				'test/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		mochaTest: {
			src: ['test/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('default', ['jshint', 'mochaTest']);
};