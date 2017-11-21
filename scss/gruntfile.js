module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

	require('jit-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourcemap: 'file',
                    style: 'compressed'
                },
                files: {
                    'css/styles.css': 'scss/styles.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 9', 'ie 10', 'Android 4'],
                map: true
            },
            dist: {
                src: 'css/styles.css'
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
        }

    });

    // css tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['sass', 'autoprefixer']);

};
