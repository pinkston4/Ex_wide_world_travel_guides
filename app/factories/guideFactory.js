"use strict";

app.factory("Guide", function ($http) {

	let getNewBooks = function () {
		let bookData = [];
		return new Promise ( (resolve, reject) => {
			$http.get(`../data/guides.json`)
			.success( (data) => {
				let newData = data;
				bookData = newData;
				console.log("newData, on guideFactory", newData);
				console.log("defined bookData on factory", bookData);
				resolve(bookData);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};
	return {getNewBooks};

});