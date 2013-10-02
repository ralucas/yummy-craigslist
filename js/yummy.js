$(document).ready(function(){

	var cldata = function(JSONobj){
		var clObj = [];
		clObj.push(JSONobj);
		return clObj;
	};

	var getSearch = function(searchterm, arr){
		for(var i = 0; i < arr.length; i++){
			//how to search through individual terms from job title; will need to parse the text
		}
	};

	$('#searchbtn').on('click', function(){
		var searchTerm = $('#inputTerm').val();

		var zipCode = $('#inputZipCode').val();

	});
	


	


});