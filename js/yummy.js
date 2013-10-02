$(document).ready(function(){

	var clObj = [];

	var parseTitle = function(obj){
		var counter = 0;
		var parseArr = [];
		for (var key in obj){
			parseArr[counter] = key.split(' ');
			counter += 1;
		}
		return parseArr;
	};

	var getSearch = function(searchterm, arr){
		var fullTitle;
		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < arr[i].length; j++){
				if(searchterm === arr[i][j]){
					fullTitle = arr[i].join(' ');
				}
			}
		}
		return fullTitle;
	};

	var getListing = function(title, obj){
		var link;
		for(var key in obj){
			if(title === key){
				link = obj[key];
			}
		}
		return link;
	};

	$('#searchbtn').on('click', function(){
		var searchTerm = $('#inputTerm').val();
		console.log(searchTerm);

		var zipCode = $('#inputZipCode').val();
		console.log(zipCode);

		$.ajax({
			type: 'GET',
			url: "http://richardalucas.com/json/results.json",
			async: false,
			jsonpCallback: 'jsonCallback',
			contentType: "application/json",
			dataType: 'jsonp',success: function(json) {
				clObj.push(json);
				var newArr = parseTitle(json);
				var jobTitle = getSearch(searchTerm, newArr);
				var jobLink = getListing(jobTitle, json);
				$(".container").append("<h2>"+jobTitle+"</h2><h3><a href="+jobLink+">"+jobLink+"</a></h3>");
			},
		});
	});
});
