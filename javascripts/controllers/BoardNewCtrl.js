"use strict";

app.controller("BoardNewCtrl", function($scope, $rootScope, $location, BoardFactory){
	$scope.newPin = {};

	$scope.addNewBoard = function(){
		$scope.newPin.isSelected = false;
		$scope.newPin.uid = $rootScope.user.uid;
		BoardFactory.postNewBoard($scope.newPin).then(function(boardId){
			$location.url("/boards/list");
			$scope.newPin = {};
		});
	};
});

console.log("BoardNewCtrl")