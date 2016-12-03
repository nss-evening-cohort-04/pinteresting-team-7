"use strict";

app.controller("BoardViewCtrl", function($scope, $routeParams, BoardFactory){
	$scope.selectedBoard = {};
	let boardId = $routeParams.id;

	BoardFactory.getSingleBoard(boardId).then(function(oneBoard){
		oneBoard.id=boardId;
		$scope.selectedBoard = oneBoard;
	});
});