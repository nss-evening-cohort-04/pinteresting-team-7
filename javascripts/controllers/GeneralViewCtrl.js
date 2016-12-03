"use strict";

app.controller("GeneralViewCtrl", function($scope, $rootScope, BoardFactory){
	$scope.boards = [];

	let getBoards = function(){
		BoardFactory.getBoardList($rootScope.user.uid).then(function(fbItems){
		$scope.boards = fbItems;
	});
};

getBoards();

$scope.deleteBoard = function(boardId){
		BoardFactory.deleteBoard(boardId).then(function(response){
			getBoards();
		});
	};

	$scope.inputChange = function(change){
		BoardFactory.editBoard(change).then(function(response){
		 	getBoards();
		});
	};
});