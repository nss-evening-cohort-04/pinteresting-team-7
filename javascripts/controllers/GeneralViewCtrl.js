"use strict";

app.controller("GeneralViewCtrl", function($scope, $rootScope, BoardFactory){
	$scope.boards = [];

	let getBoards = function(){
		BoardFactory.getBoardList($rootScope.user.uid).then(function(fbBoards){
		$scope.boards = fbBoards;
	});
};

getBoards();

$scope.deleteBoard = function(boardId){
		BoardFactory.deleteBoard(boardId).then(function(response){
			getBoards();
		});
	};

	$scope.inputChange = function(thingy){
		BoardFactory.editBoard(thingy).then(function(response){
		 	getBoards();
		});
	};
});

console.log("GeneralViewCtrl Loaded");