"use strict";

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
    {
    	name: "Logout",
		url:"#/logout"
	}, 
    {
    	name:"All Items",
    	url:"#/boards/list"
	}, 
    {
    	name:"New Item",
    	url:"#/boards/new"
	}
   ];
});
