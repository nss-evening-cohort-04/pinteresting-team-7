"use strict";

app.controller("BoardViewCtrl", function($scope, $routeParams, BoardFactory){
	console.log("routeParams", $routeParams);
	$scope.selectedBoard = {};
	let BoardId = $routeParams.id;
	console.log("$routeParams", BoardId);

	BoardFactory.getSingleBoard(boardId).then(function(oneBoard){
		oneBoard.id=boardId;
		$scope.selectedBoard = oneBoard;
		console.log("oneBoard", oneBoard);
	});
});