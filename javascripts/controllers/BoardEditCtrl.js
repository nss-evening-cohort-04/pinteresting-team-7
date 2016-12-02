"use strict";

app.controller("BoardEditCtrl", function($scope, $location, $routeParams, BoardFactory){
	$scope.newPin = {};
	let boardId = $routeParams.id;

	BoardFactory.getSingleBoard(boardId).then(function(oneBoard){
		oneBoard.id = boardId;
		$scope.newPin = oneBoard;
	});

	$scope.addNewBoard = function(){
		BoardFactory.editBoard($scope.newBoard).then(function(response){
			$scope.newBoard = {};
			$location.url("/boards/list");
		});
	};
});