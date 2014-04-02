module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          middleware: function (connect, options, middlewares) {
            middlewares.push(function (req, res, next) {
              if (req.url !== '/hello/world') return next();
              res.end('Hello, world from port #' + options.port + '!');
            });
            return middlewares;
          }
        }
      }
    }
  });
};
