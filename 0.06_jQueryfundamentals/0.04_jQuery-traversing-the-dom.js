$(document).ready(function(){
	$("#p-one").next().css({border: "2px solid blue"});
//next and prev
	$("#list").prev().css({border: "2px solid red"});
//parent
	$("#p-two").parent().css({border: "2px solid yellow"})
//child
	$("#div-two").children().css({border: "2px solid green"})
//find
	$("#find").find("#facebook").css("background-color", "red")

	$("#find").find("#insta").css("background-color", "green")

	$("#find").find("#twitter").css("background-color", "pink")
//closest
	$("#twitter-button").closest("li").css("background-color", "yellow")
});