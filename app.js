var app = angular.module("BikeParts", ["ngResource"]);

//add loading spinner
app.config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');
  var spinnerFunction = function spinnerFunction(data, headersGetter) {
   document.getElementById("spinner").style.display = 'block';
    return data;
  };
  $httpProvider.defaults.transformRequest.push(spinnerFunction);
});

app.factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
   document.getElementById("spinner").style.display = 'none';
      return response;
    }, function (response) {
     document.getElementById("spinner").style.display = 'none';
      return $q.reject(response);
    });
  };
});
