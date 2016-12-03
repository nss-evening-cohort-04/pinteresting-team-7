"use strict";

app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){

	var getPinList = function(userId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="uid"&equalTo="${userId}"`)
	 	.success(function(response){
	 		let pins = [];
	 		Object.keys(response).forEach(function(key){
	 			response[key].id = key;
	 			boards.push(response[key]);
	 		});
	 	  resolve(pins);
	 	})
	 	.error(function(errorResponse){
	 	  reject(errorResponse);
	 	});
	});
  };
 var postNewPin = function(newPin){
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`,
			JSON.stringify({
				assignedTo: newPin.assignedTo,
				isSelected: newPin.isSelected,
				pin: newPin.board,
				uid: newPin.uid
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

var deletePin = function(boardId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${PinId}.json`)
		.success(function(deleteResponse){
			resolve(deleteResponse);
		})
		.error(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleBoard = function(pinId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
		.success(function(getSingleResponse){
			resolve(getSingleResponse);
		})
		.error(function(getSingleError){
			reject(getSingleError);
		});
	});
};

 var editPin = function(editPin){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${editPin.id}.json`,
			JSON.stringify({
				assignedTo: editPin.assignedTo,
				isSelected: editPin.isSelected,
				pins: editPin.pin,
				uid: editPin.uid
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


 return {getPinList:getPinList, postNewPin:postNewPin, deletePin:deletePin, getSinglePin:getSinglePin, editPin:editPin};
});

