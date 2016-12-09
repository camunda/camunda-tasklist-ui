define([
  'text!./../index.html',
], function(
  tasklistTemplate
) {
  'use strict';

  return [
    '$routeProvider',
  function(
    $routeProvider
  ) {

    $routeProvider
      .when('/', {
        template: tasklistTemplate,
        controller: 'camTasklistViewCtrl',
        authentication: 'required',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  }];
});
