module.exports = function(grunt) {
  
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            src: ["!node_modules/**/*.js","scripts/*.js"]
        },
        browserify: {
            dist: {
                files: {
                    "build/bundle.js": ["scripts/*.js"]
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            styles: {
                files: ["styles/**/*.css"]
            },
            html: {
                files: ["index.html"]
            },
            scripts: {
                files: ["scripts/*.js"],
                tasks: ["eslint","browserify"],
                options: {
                    spawn: false,
                },
            }
        },
        uglify: {
            options: {
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "build",
                    src: "bundle.js",
                    dest: "build",
                    ext: ".min.js"
                }]
            }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks("grunt-browserify");
        
    
    // Default task(s).
    grunt.registerTask("default", ["uglify", "watch","eslint","browserify"]);
    
};    
