"use strict";

app.controller("BookCtrl", function($scope) {
	$scope.books = [];
	 $.ajax({
        method: 'GET',
        url: '../data/guides.json'
    }).done(function(data) {
        var newData = data;
        $scope.books = newData;
        console.log("Data", newData);
        console.log("Jack", $scope.books);
        $scope.$apply();
    });
});