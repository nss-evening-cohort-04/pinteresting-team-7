"use strict";

app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG){

	var getBoardList = function(userId){
	 return $q((resolve, reject) =>{
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
	 	.success(function(response){
	 		let boards = [];
	 		Object.keys(response).forEach(function(key){
	 			response[key].id = key;
	 			boards.push(response[key]);
	 		});
	 	  resolve(boards);
	 	})
	 	.error(function(errorResponse){
	 	  reject(errorResponse);
	 	});
	});
  };
 var postNewBoard = function(newBoard){
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`,
			JSON.stringify({
				assignedTo: newBoard.assignedTo,
				isSelected: newBoard.isSelected,
				board: newBoard.pin,
				uid: newBoard.uid
			})
		)
		.success(function(postResponse){
		 resolve(postResponse);
		})
		.error(function(postError){
			reject(postError);
		});
	});
 };

var deleteBoard = function(boardId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`)
		.success(function(deleteResponse){
			resolve(deleteResponse);
		})
		.error(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleBoard = function(boardId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`)
		.success(function(getSingleRespose){
			resolve(getSingleRespose);
		})
		.error(function(getSingleError){
			reject(getSingleError);
		});
	});
};

 var editBoard = function(editBoard){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${editBoard.id}.json`,
			JSON.stringify({
				assignedTo: editBoard.assignedTo,
				isSelected: editBoard.isSelected,
				pins: editBoard.pin,
				uid: editBoard.uid
			})
		)
		.success(function(editResponse){
		 resolve(editResponse);
		})
		.error(function(editError){
			reject(editError);
		});
	});
 };


 return {getBoardList:getBoardList, postNewBoard:postNewBoard, deleteBoard:deleteBoard, getSingleBoard:getSingleBoard, editBoard:editBoard};
});

