module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  function csp(){
    return function(req, res, next){
      res.setHeader("X-WebKit-CSP", "default-src 'self' http://www.html5rocks.com/");
      res.setHeader("X-Content-Security-Policy", "default-src 'self' http://www.html5rocks.com/");
      res.setHeader("Content-Security-Policy", "default-src 'self' http://www.html5rocks.com/");
      next();
    };
  }

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: '.',
          keepalive: true
//          middleware: function(connect, options){
//            return [
//              csp(),
//              connect.static(String('.')),
//              connect.directory(String('.'))
//            ];
//          }
        }
      }
    }
  });
  grunt.registerTask('default', ['connect:server']);
};
