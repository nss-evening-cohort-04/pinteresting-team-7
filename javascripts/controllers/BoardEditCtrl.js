"use strict";

app.controller("BoardEditCtrl", function($scope, $location, $routeParams, BoardFactory){
	$scope.newBoard = {};
	let BoardId = $routeParams.id;

	ItemFactory.getSingleBoard(BoardId).then(function(oneBoard){
		oneBoard.id = BoardId;
		$scope.newBoard = oneBoard;
	});

	$scope.addBoard = function(){
		BoardFactory.editBoard($scope.newBoard).then(function(response){
			$scope.newBoard = {};
			$location.url("/boards/list");
		});
	};
});