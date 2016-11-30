"use strict";

app.controller("CreateBoardCtrl", function($scope, $rootScope, $location, BoardFactory){
	$scope.newBoard = {};

	$scope.addNewBoard = function(){
		$scope.newBoard.isClicked = true;
		$scope.newBoard.uid = $rootScope.user.uid;
		BoardFactory.postNewBoard($scope.newBoard).then(function(BoardId){
			$location.url("/boards/list");
			$scope.newBoard = {};
		});
	};
});
