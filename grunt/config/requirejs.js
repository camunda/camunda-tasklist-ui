module.exports = function() {
  'use strict';
  var commons = require('camunda-commons-ui');
  var _ = commons.utils._;
  var rjsConf = commons.requirejs();

  var deps = [
    'requirejs',
    'camunda-commons-ui',
    'angular-resource',
    'angular-sanitize',
    'angular-route',
    'angular-bootstrap'
  ];

  var rConf = {
    options: {
      stubModules: [
        'json',
        'text'
      ],

      optimize: '<%= (buildTarget === "dist" ? "uglify2" : "none") %>',
      preserveLicenseComments: false,
      generateSourceMaps: true,

      baseUrl: './<%= pkg.gruntConfig.clientDir %>',

      paths: _.extend(rjsConf.paths, {
        // 'tasklist':                       'scripts',
        'camunda-tasklist-ui':            'scripts/camunda-tasklist-ui',
      }),

      shim: _.extend(rjsConf.shim, {}),

      packages: rjsConf.packages.concat([])
    },


    dependencies: {
      options: {
        create: true,
        name: '<%= pkg.name %>-deps',
        out: '<%= buildTarget %>/scripts/deps.js',
        include: deps
      }
    },

    scripts: {
      options: {
        name: 'camunda-tasklist-ui',
        out: '<%= buildTarget %>/scripts/<%= pkg.name %>.js',
        exclude: deps,
        include: []
      }
    }
  };

  return rConf;
};
