"use strict";

app.controller("CreateBoardCtrl", function($scope, $rootScope, $location, BoardFactory){
	$scope.newPin = {};

	$scope.addNewBoard = function(){
		$scope.newPin.isSelected = false;
		$scope.newBoard.uid = $rootScope.user.uid;
		BoardFactory.postNewBoard($scope.newPin).then(function(boardId){
			$location.url("/boards/list");
			$scope.newPin = {};
		});
	};
});
