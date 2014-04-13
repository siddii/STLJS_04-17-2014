module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  function csp(){
    return function(req, res, next){
      res.setHeader("Access-Control-Allow-Origin", "*"); // so that evilhost's content can be imported
      res.setHeader("X-WebKit-CSP", "default-src 'self' evilhost:8000 style-src 'self' 'unsafe-inline'"); //style-src unsafe-inline setting is for grunt-connect
      res.setHeader("X-Content-Security-Policy", "default-src 'self' evilhost:8000 style-src 'self' 'unsafe-inline'");
      res.setHeader("Content-Security-Policy", "default-src 'self' evilhost:8000 style-src 'self' 'unsafe-inline'");
      next();
    };
  }

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: '.',
          keepalive: true,
          middleware: function(connect, options){
            return [
              csp(),
              connect.static(__dirname),
              connect.directory(__dirname)
            ];
          }
        }
      }
    }
  });
  grunt.registerTask('default', ['connect:server']);
};
