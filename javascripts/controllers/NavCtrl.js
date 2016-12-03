"use strict";

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
    {
    	name: "Logout",
		url:"#/logout"
	}, 
    {
    	name:"My Boards",
    	url:"#/boards/list"
	}, 
    {
    	name:"All Boards",
    	url:"#/boards/new"
	}
   ];
});
