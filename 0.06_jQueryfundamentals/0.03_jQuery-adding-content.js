$(document).ready(function(){
	//content to be added
	var content= "<p style= 'color:red'> You can add me anywhere in the DOM using different jQuery methods!!</p>";
	var content2= "You can add me anywhere in the DOM using different jQuery methods!!";

	//Append
	$("#append-example").append(content);

	//Prepend
	$("#prepend-example").prepend(content);

	//Before
	$("#before-example").before(content);
	//After
	$("#after-example").after(content);
	//HTMl
	$("#html-example").html(content);
	//Text
	$("#text-example").text(content2)
});