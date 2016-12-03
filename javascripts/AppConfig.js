"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
})

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
	
	let logged = AuthFactory.isAuthenticated();
	let appTo;

	if(currRoute.originalPath){

		appTo = currRoute.originalPath.indexOf('/auth') !== -1;
	}

	if(!appTo && !logged){
		event.preventDefault();
		$location.path('/auth');
	}
});

});

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller:'AuthCtrl',
		})
		.when('/boards/list', {
			templateUrl: 'partials/general-view.html',
			controller: 'GeneralViewCtrl',
			resolve: {isAuth}
		})
		.when('/boards/new', {
			templateUrl: 'partials/board-new.html',
			controller: 'BoardNewCtrl',
			resolve: {isAuth}
		})
		.when('/boards/view/:id', {
			templateUrl: 'partials/board-view.html',
			controller: 'BoardViewCtrl',
			resolve: {isAuth}
		})
		.when('/boards/edit/:id', {
			templateUrl: 'partials/board-new.html',
			controller:'BoardEditCtrl',
			resolve: {isAuth}
		})
		.when('/logout', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl',
			resolve: {isAuth}
		})
		.otherwise('/auth');
});

console.log("AppConfig loaded");