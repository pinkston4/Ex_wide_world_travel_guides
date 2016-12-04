"use strict";

app.controller("BookCtrl", function($scope, Guide) {
	Guide.getNewBooks()
	.then( (bookData) => {
		console.log("bookData from controller", bookData);
		$scope.books = bookData;
		$scope.$apply();
	});
});