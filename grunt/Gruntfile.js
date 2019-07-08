/**
 * 1. 代码压缩 done
 * 2. less预编译 done
 * 3. less格式校验 done
 * 4. js格式校验
 * 5. 调试 done
 * 6. 分包 done
 */
var bundleJson = require('./bundle.js');
var configFilePath = bundleJson();
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: {
        src: ['dist'],
      },
      trash: {
        src: ['./dist/-', configFilePath],
      },
      deploy: {
        src: ['deploy'],
      },
    },
    browserify: {
      dist: {
        files: {
          './dist/-': './src/main.js',
        },
        options: {
          transform: ['stringify', 'node-lessify'],
          plugin: [
            [
              'partition-bundle', {
                map: configFilePath,
                output: 'dist/js',
                url: 'js/',
                main: './src/main.js',
              },
            ]
          ],
        }
      }
    },
    injector: {
      options: {
        template: './index.html',
        destFile: './dist/index.html',
        relative: true,
        addRootSlash: false,
      },
      localDependencies: {
        files: {
          './index.html': ['./dist/js/app.*.js'],
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './dist',
        },
      },
    },
    lesslint: {
      src: ['src/**/*.less']
    },
    eslint: {
      target: ['src/**/*.js']
    },
    htmlmin: {
      default: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.html'],
          dest: 'deploy',
        }],
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
      },
    },
    copy: {
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.js'],
          dest: 'deploy/',
        }],
      },
    },
    uglify: {
      dist: {
        expand: true,
        cwd: 'dist',
        src: ['**/*.js'],
        dest: 'deploy'
      },
    },
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  // 默认被执行的任务列表。
  grunt.registerTask('compile', ['clean:dist', 'lesslint', 'eslint',
        'browserify', 'injector',
    'clean:trash'
  ]);
  grunt.registerTask('dev', ['compile', 'connect:server:keepalive']);
  grunt.registerTask('build', ['clean:deploy', 'compile', 'uglify',
    'htmlmin', 'clean:dist']);
};
