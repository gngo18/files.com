$(document).ready(function(){
	//first and last
	$("#example-one li:first").css({border: "2px solid blue"});
	$("#example-one li:last").css({border: "2px solid turquoise"})
	//odds and evens
	$("#example-two li:odd").css("background-color", "#AAA");
	$("#example-two li:even").css("background-color", "#0F0")
	//Javascript always starts at 0
	//Not- targrt all li inside example-three exept for list-item-three
	$("#example-three li:not('#list-item-three')").css({border: "2px solid yellow"})
	//Less than or Greater than
	$("#example-four li:lt(5)").css("background-color", "yellow")
	//greater than = gt
	$("#example-four li:gt(2)").css({border: "2px solid red"})
});