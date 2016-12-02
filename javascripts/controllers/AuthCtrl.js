"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, AuthFactory, UserFactory, $location){
	$scope.setLoginContainer = true;
	$scope.setRegisterContainer = false;
	

	if($location.path() == "/logout"){
		AuthFactory.logout();
		$rootScope.user ={};
		$location.url("/auth");
	}

	let logMeIn = function(loginParams){
		AuthFactory.authenticate(loginParams).then(function(didLogin){
			console.log("didLogin", didLogin);
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			$rootScope.user = userCreds;
			$scope.login = {};
			$scope.register = {};
			$location.url("/boards/list");
		});
	};

	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;

	};

	$scope.setRegisterContainer = function(){
		$scope.loginContainer = false;
		$scope.registerContainer = true;

	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid;
			console.log("didRegister", didRegister);
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			logMeIn(registerNewUser);
		});
	};

	$scope.loginUser = function(loginNewUser){
		logMeIn(loginNewUser);
	};
});