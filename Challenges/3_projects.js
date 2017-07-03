$(document).ready(function(){
	$("#add").on("click", function(){

	var song = $("#song").val();
	var insertedHTML = "<li>" + song + "<li>";
	$("#song-list").append(insertedHTML);
	$("#song").val("");

	})
});


