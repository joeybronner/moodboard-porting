angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope, $location, MainSrv) {
	/* -------------------- METHODS -------------------- */
	$scope.resetSessionAndUserValues = function() {
		$rootScope.username = '';
		$rootScope.websiteName = 'MOODBOARD';
	}

	$scope.connect = function(item) {
    	$rootScope.username = document.getElementById('username').value;
    	$rootScope.websiteName = 'MOODBOARD -'; 
  	}

  	$scope.hideActionBar = function() {
  		document.getElementById("actionbar").style.display = 'none';
  	}

  	$scope.applyDefaultInterfaceStyle = function() {
		document.querySelector(".mdl-layout__content").style.background = '#2e3764';
	  	document.querySelector(".mdl-layout__header").style.background = '#2e3764';
	}

	/* -------------------- INIT -------------------- */
	console.log(MainSrv.getUserStatus());
	$scope.resetSessionAndUserValues();
	$scope.applyDefaultInterfaceStyle();
  	$scope.hideActionBar();
});