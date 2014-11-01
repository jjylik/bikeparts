app.controller('AppController', function($scope, $http) {
	
   var fixes_url = 'https://www.kimonolabs.com/api/2o3try8i?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var brakes_url = 'https://www.kimonolabs.com/api/e44espis?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var seats_url = 'https://www.kimonolabs.com/api/9bt8hm54?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var handlebars_url = 'https://www.kimonolabs.com/api/4gzood5e?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var bikes_url = 'https://www.kimonolabs.com/api/4ivtj7ei?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var frames_url = 'https://www.kimonolabs.com/api/7e2qax1w?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var drivetrain_url = 'https://www.kimonolabs.com/api/94v4xqrq?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var fillari_lehti_url = 'https://www.kimonolabs.com/api/c2eip02c?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var yksivaihde = 'https://www.kimonolabs.com/api/ctxw3wfy?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
   var tori = 'https://www.kimonolabs.com/api/8lxgfcge?apikey=06009849069bc5807cded9e31b4d029b&callback=JSON_CALLBACK';
  
   $scope.allresults = [];
   $http.jsonp(frames_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   
    $http.jsonp(bikes_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   
    $http.jsonp(handlebars_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   
    $http.jsonp(yksivaihde).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   $http.jsonp(fixes_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
    $http.jsonp(brakes_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   //$http.jsonp(tori).success(function(data) {
   //   $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   //});
    $http.jsonp(seats_url).success(function(data) {
      $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   $http.jsonp(drivetrain_url).success(function(data) {
	 $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   $http.jsonp(drivetrain_url).success(function(data) {
	 $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
   $http.jsonp(drivetrain_url).success(function(data) {
	 $scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });
  
	$http.jsonp(fillari_lehti_url).success(function(data) {
		data.results.collection1.forEach(function(element) {
		element.item = { text: element.item, 
						 href: 'http://www.fillari-lehti.fi/Tori.aspx'
					   };
		});
		$scope.allresults.push.apply($scope.allresults, data.results.collection1);
   });

});
